import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
  TOGGLE_UPVOTE_THREAD_DETAIL: 'TOGGLE_UPVOTE_THREAD_DETAIL',
  TOGGLE_DOWNVOTE_THREAD_DETAIL: 'TOGGLE_DOWNVOTE_THREAD_DETAIL',
  CREATE_COMMENT_THREAD: 'CREATE_COMMENT_THREAD',
  TOGGLE_UPVOTE_COMMENT: 'TOGGLE_UPVOTE_COMMENT',
  TOGGLE_DOWNVOTE_COMMENT: 'TOGGLE_DOWNVOTE_COMMENT',
};

function receiveThreadDetailActionCreator(threadDetail) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      threadDetail,
    },
  };
}

function clearThreadDetailActionCreator() {
  return {
    type: ActionType.CLEAR_THREAD_DETAIL,
  };
}

function toggleUpVoteThreadDetailActionCreator(userId) {
  return {
    type: ActionType.TOGGLE_UPVOTE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function toggleDownVoteThreadDetailActionCreator(userId) {
  return {
    type: ActionType.TOGGLE_DOWNVOTE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function createCommentThreadActionCreator(content) {
  return {
    type: ActionType.CREATE_COMMENT_THREAD,
    payload: {
      content,
    },
  };
}

function toggleUpVoteCommentActionCreator({ threadId, commentId, userId }) {
  return {
    type: ActionType.TOGGLE_UPVOTE_COMMENT,
    payload: {
      threadId,
      commentId,
      userId,
    },
  };
}

function toggleDownVoteCommentActionCreator({ threadId, commentId, userId }) {
  return {
    type: ActionType.TOGGLE_DOWNVOTE_COMMENT,
    payload: {
      threadId,
      commentId,
      userId,
    },
  };
}

function asyncCreateCommentThread({ threadId, content }) {
  return async (dispatch) => {
    try {
      dispatch(showLoading());
      const response = await api.createComment({ threadId, content });
      dispatch(createCommentThreadActionCreator(response));
    } catch (error) {
      console.log(error);
    }
  };
}

function asyncReceiveThreadDetail(threadId) {
  return async (dispatch) => {
    try {
      dispatch(showLoading());
      const thread = await api.getThreadsDetail(threadId);
      dispatch(receiveThreadDetailActionCreator(thread));
    } catch (error) {
      console.log(error);
    }
    dispatch(hideLoading());
  };
}

function asyncToggleUpVoteThreadDetail() {
  return async (dispatch, getState) => {
    const { authUser, threadDetail } = getState();
    dispatch(toggleUpVoteThreadDetailActionCreator(authUser.id));
    try {
      await api.upVoteThread(threadDetail.id);
    } catch (error) {
      console.log(error);
    }
    dispatch(hideLoading());
  };
}

function asyncToggleDownVoteThreadDetail() {
  return async (dispatch, getState) => {
    const { authUser, threadDetail } = getState();
    dispatch(toggleDownVoteThreadDetailActionCreator(authUser.id));
    try {
      await api.downVoteThread(threadDetail.id);
    } catch (error) {
      console.log(error);
    }
    dispatch(hideLoading());
  };
}

function asyncToggleUpVoteComment({ threadId, commentId }) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(toggleUpVoteCommentActionCreator({ threadId, commentId, userId: authUser.id }));
    try {
      await api.upVoteComment(threadId, commentId);
    } catch (error) {
      console.log(error);
    }
    dispatch(hideLoading());
  };
}

function asyncToggleDownVoteComment({ threadId, commentId }) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(toggleDownVoteCommentActionCreator({ threadId, commentId, userId: authUser.id }));
    try {
      await api.downVoteComment(threadId, commentId);
    } catch (error) {
      console.log(error);
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  asyncCreateCommentThread,
  asyncReceiveThreadDetail,
  asyncToggleDownVoteComment,
  asyncToggleDownVoteThreadDetail,
  asyncToggleUpVoteComment,
  asyncToggleUpVoteThreadDetail,
  createCommentThreadActionCreator,
  clearThreadDetailActionCreator,
  receiveThreadDetailActionCreator,
  toggleUpVoteThreadDetailActionCreator,
  toggleUpVoteCommentActionCreator,
  toggleDownVoteCommentActionCreator,
  toggleDownVoteThreadDetailActionCreator,
};
