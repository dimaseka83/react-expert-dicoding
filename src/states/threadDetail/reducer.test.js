/* eslint-disable no-undef */
import threadDetailReducer from './reducer';

describe('threadDetailReducer', () => {
  it('should return the initial state when given unknown action', () => {
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });

  it('should return the initial state when given by RECEIVE_THREAD_DETAIL', () => {
    const initialState = null;
    const action = { type: 'RECEIVE_THREAD_DETAIL',
      payload: { threadDetail: [
        {
          id: 1,
          title: 'Thread 1',
          body: 'Thread 1 body',
          category: 'Category 1',
          createdAt: '2018-01-01T00:00:00.000Z',
          owner: {
            id: 1,
            name: 'User 1',
            avatar: 'https://api.adorable.io/avatars/285/1.png',
          },
          upVotesBy: [],
          downVotesBy: [],
          comments: [
            {
              id: 1,
              content: 'Comment 1',
              createdAt: '2018-01-01T00:00:00.000Z',
              owner: {
                id: 1,
                name: 'User 1',
                avatar: 'https://api.adorable.io/avatars/285/1.png',
              },
              upVotesBy: [],
              downVotesBy: [],
            },
          ],
        },
      ] },
    };

    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual(action.payload.threadDetail);
  });

  it('should return the initial state when given by CLEAR_THREAD_DETAIL', () => {
    const initialState = null;
    const action = { type: 'CLEAR_THREAD_DETAIL' };

    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toBeNull();
  });

  it('should return the initial state when given by TOGGLE_UPVOTE_THREAD_DETAIL', () => {
    const initialState = {
      id: 1,
      title: 'Thread 1',
      body: 'Thread 1 body',
      category: 'Category 1',
      createdAt: '2018-01-01T00:00:00.000Z',
      owner: {
        id: 1,
        name: 'User 1',
        avatar: 'https://api.adorable.io/avatars/285/1.png',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 1,
          content: 'Comment 1',
          createdAt: '2018-01-01T00:00:00.000Z',
          owner: {
            id: 1,
            name: 'User 1',
            avatar: 'https://api.adorable.io/avatars/285/1.png',
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };

    const action = { type: 'TOGGLE_UPVOTE_THREAD_DETAIL',
      payload: {
        userId: 1,
      },
    };

    const nextState = threadDetailReducer(initialState, action);

    expect(nextState.upVotesBy).toEqual([action.payload.userId]);
  });

  it('should return the initial state when given by TOGGLE_DOWNVOTE_THREAD_DETAIL', () => {
    const initialState = {
      id: 1,
      title: 'Thread 1',
      body: 'Thread 1 body',
      category: 'Category 1',
      createdAt: '2018-01-01T00:00:00.000Z',
      owner: {
        id: 1,
        name: 'User 1',
        avatar: 'https://api.adorable.io/avatars/285/1.png',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 1,
          content: 'Comment 1',
          createdAt: '2018-01-01T00:00:00.000Z',
          owner: {
            id: 1,
            name: 'User 1',
            avatar: 'https://api.adorable.io/avatars/285/1.png',
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };

    const action = { type: 'TOGGLE_DOWNVOTE_THREAD_DETAIL',
      payload: {
        userId: 1,
      },
    };

    const nextState = threadDetailReducer(initialState, action);

    expect(nextState.downVotesBy).toEqual([action.payload.userId]);
  });
});
