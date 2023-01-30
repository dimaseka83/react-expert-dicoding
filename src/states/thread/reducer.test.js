/* eslint-disable no-undef */
import threadReducer from './reducer';

describe('threadReducer', () => {
  it('should return the initial state when given unknown action', () => {
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    const nextState = threadReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });

  it('should return the initial state when given by RECEIVE_THREADS', () => {
    const initialState = [];
    const action = { type: 'RECEIVE_THREADS',
      payload: {
        threads: [
          {
            id: "8xf0y6ziyjabvozdd253nd",
            title: "Dicoding is the best from learn React",
            body: "Everyone says so after all.",
            category: "react",
            createdAt: "2017-06-26T19:34:21.718Z",
            ownerId: "8xf0y6ziyjabvozdd253nd",
            upVotesBy: [],
            downVotesBy: [],
            totalComments: 0,
          },
        ],
      } };

    const nextState = threadReducer(initialState, action);

    expect(nextState).toEqual(action.payload.threads);
  });

  it('should return the threads with new thread when given by ADD_THREAD', () => {
    const initialState = [
      {
        id: "8xf0y6ziyjabvozdd253nd",
        title: "Dicoding is the best from learn React",
        body: "Everyone says so after all.",
        category: "react",
        createdAt: "2017-06-26T19:34:21.718Z",
        ownerId: "8xf0y6ziyjabvozdd253nd",
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0,
      },
    ];

    const action = { type: 'ADD_THREAD',
      payload: {
        thread: [
          {
            id: "8xf0y6ziyjabvozdd253nd",
            title: "Dicoding is the best from learn React",
            body: "Everyone says so after all.",
            category: "react",
            createdAt: "2017-06-26T19:34:21.718Z",
            ownerId: "8xf0y6ziyjabvozdd253nd",
            upVotesBy: [],
            downVotesBy: [],
            totalComments: 0,
          },
        ] },
    };

    const nextState = threadReducer(initialState, action);

    expect(nextState).toEqual([...initialState, action.payload.thread]);
  });

  it('should return the threads with the toggle thread when given by TOGGLE_UPVOTE_THREAD', () => {
    const initialState = [
      {
        id: "8xf0y6ziyjabvozdd253nd",
        title: "Dicoding is the best from learn React",
        body: "Everyone says so after all.",
        category: "react",
        createdAt: "2017-06-26T19:34:21.718Z",
        ownerId: "8xf0y6ziyjabvozdd253nd",
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0,
      },
    ];

    const action = { type: 'TOGGLE_UPVOTE_THREAD',
      payload: {
        threadId: "8xf0y6ziyjabvozdd253nd",
        userId: "8xf0y6ziyjabvozdd253nd",
      } };

    const nextState = threadReducer(initialState, action);

    expect(nextState).toEqual([{
      ...initialState[0],
      upVotesBy: [action.payload.userId],
    }]);

    const nextState2 = threadReducer(nextState, action);

    expect(nextState2).toEqual(initialState);
  });

  it('should return the threads with the toggle thread when given by TOGGLE_DOWNVOTE_THREAD', () => {
    const initialState = [
      {
        id: "8xf0y6ziyjabvozdd253nd",
        title: "Dicoding is the best from learn React",
        body: "Everyone says so after all.",
        category: "react",
        createdAt: "2017-06-26T19:34:21.718Z",
        ownerId: "8xf0y6ziyjabvozdd253nd",
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0,
      },
    ];

    const action = { type: 'TOGGLE_DOWNVOTE_THREAD',
      payload: {
        threadId: "8xf0y6ziyjabvozdd253nd",
        userId: "8xf0y6ziyjabvozdd253nd",
      } };

    const nextState = threadReducer(initialState, action);

    expect(nextState).toEqual([{
      ...initialState[0],
      downVotesBy: [action.payload.userId],
    }]);

    const nextState2 = threadReducer(nextState, action);

    expect(nextState2).toEqual(initialState);
  });
});
