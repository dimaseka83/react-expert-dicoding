/* eslint-disable no-undef */
import usersReducer from './reducer';

describe('usersReducer', () => {
  it('should return the initial state when given unknown action', () => {
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    const nextState = usersReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });

  it('should return the state with the new user when given the RECEIVE_USER action', () => {
    const initialState = [];
    const action = { type: 'RECEIVE_USERS',
      payload: {
        users: [
          {
            id: 1,
            name: 'User 1',
            email: 'user1@mail.com',
            avatar: 'https://api.adorable.io/avatars/285/1.png',
          },
          {
            id: 2,
            name: 'User 2',
            email: 'user2@mail.com',
            avatar: 'https://api.adorable.io/avatars/285/2.png',
          },
        ],
      } };

    const nextState = usersReducer(initialState, action);

    expect(nextState).toEqual(action.payload.users);
  });
});
