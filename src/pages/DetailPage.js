import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ListComment from '../components/ListComment';
import ThreadComment from '../components/ThreadComment';
import ThreadDetail from '../components/ThreadDetail';
import {
  asyncCreateCommentThread,
  asyncReceiveThreadDetail,
  asyncToggleDownVoteComment,
  asyncToggleDownVoteThreadDetail,
  asyncToggleUpVoteComment,
  asyncToggleUpVoteThreadDetail,
} from '../states/threadDetail/action';

function DetailPage() {
  const { id } = useParams();
  const {
    threadDetail = null,
    users = [],
    authUser,
  } = useSelector((states) => states);
  const [status, setStatus] = useState('none');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  const onUpVotes = () => {
    if (status === 'none') {
      dispatch(asyncToggleUpVoteThreadDetail());
      setStatus('upVote');
    }

    if (status === 'upVote') {
      dispatch(asyncToggleUpVoteThreadDetail());
      setStatus('none');
    }

    if (status === 'downVote') {
      dispatch(asyncToggleUpVoteThreadDetail());
      dispatch(asyncToggleDownVoteThreadDetail());
      setStatus('upVote');
    }
  };

  const onDownVotes = () => {
    if (status === 'none') {
      dispatch(asyncToggleDownVoteThreadDetail());
      setStatus('upVote');
    }

    if (status === 'upVote') {
      dispatch(asyncToggleDownVoteThreadDetail());
      dispatch(asyncToggleUpVoteThreadDetail());
      setStatus('none');
    }

    if (status === 'downVote') {
      dispatch(asyncToggleDownVoteThreadDetail());
      setStatus('upVote');
    }
  };

  const onAddComment = (content) => {
    dispatch(asyncCreateCommentThread({ threadId: id, content }));
  };

  const onUpVoteComment = (commentId) => {
    dispatch(asyncToggleUpVoteComment({ threadId: id, commentId }));
  };

  const onDownVoteComment = (commentId) => {
    dispatch(asyncToggleDownVoteComment({ threadId: id, commentId }));
  };

  if (!threadDetail) return null;

  const allComment = threadDetail.comments.map((comment) => {
    const user = users.find((use) => use.id === comment.id);
    return {
      ...comment,
      user,
      authUser: authUser.id,
    };
  });

  return (
    <section className="detail-page">
      <ThreadDetail
        {...threadDetail}
        authUser={authUser.id}
        upVoteThread={onUpVotes}
        downVoteThread={onDownVotes}
      />
      <ThreadComment addComment={onAddComment} />
      <ListComment
        comments={allComment}
        upVote={onUpVoteComment}
        downVote={onDownVoteComment}
      />
    </section>
  );
}

export default DetailPage;
