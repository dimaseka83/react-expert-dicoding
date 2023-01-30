/* eslint-disable max-len */
/* eslint-disable no-undef */

import { hideLoading, showLoading } from "react-redux-loading-bar";
import api from "../../utils/api";
import { asyncGetLeaderboards, receiveLeaderboardsActionCreator } from "./action";

const fakeResponse = [
  {
    user: {
      id: "5e1c9b3e7c2b2a0017b3b9b5",
      name: "user1",
      email: "user@mail.com",
      avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    },
    score: 100,
  },
];

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncGetLeaderboards thunk', () => {
  beforeEach(() => {
    api._getLeadeboards = api.getLeaderboard;
  });

  afterEach(() => {
    api.getLeaderboard = api._getLeadeboards;

    delete api.getLeaderboard;
  });

  it('should dispatch action correctly when data leaderboards fetching success', async () => {
    api.getLeaderboard = () => Promise.resolve(fakeResponse);

    const dispatch = jest.fn();

    await asyncGetLeaderboards()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(receiveLeaderboardsActionCreator(fakeResponse));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action correctly when data leaderboards fetching failed', async () => {
    api.getLeaderboard = () => Promise.reject(fakeErrorResponse);

    const dispatch = jest.fn();

    window.alert = jest.fn();

    await asyncGetLeaderboards()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});
