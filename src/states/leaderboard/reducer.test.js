import leaderboardsReducer from './reducer';

describe('Leaderboard reducer', () => {
  it('should return the initial state when given unknown action type', () => {
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    const nextState = leaderboardsReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });

  it('should return the new state when given RECEIVE_LEADERBOARDS action type', () => {
    const initialState = [];
    const action = {
      type: 'RECEIVE_LEADERBOARDS',
      payload: {
        leaderboards: [
          {
            user: {
              id: 1,
              name: 'user1',
              email: 'user@mail.com',
              avatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
            },
            score: 10,
          },
        ],
      },
    };

    const nextState = leaderboardsReducer(initialState, action);

    expect(nextState).toEqual(action.payload.leaderboards);
  });
});
