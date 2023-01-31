/* eslint-disable no-undef */

import { hideLoading, showLoading } from "react-redux-loading-bar";
import api from "../../utils/api";
import { receiveThreadsActionCreator } from "../thread/action";
import { receiveUsersActionCreator } from "../users/action";
import { asyncPopulateUsersAndThreads } from "./action";

const fakeResponse = [
  {
    id: "&8xf0y6ziyjabvozdd253nd",
    title: "Dicoding is the best",
    body: "I love Dicoding",
    category: "dicoding",
    createdAt: "2016-06-26T13:30:52.389Z",
    ownerId: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm",
    upVotesBy: [],
    downVotesBy: [],
    totalComments: 0,
  },
];

const fakeUsers = [
  {
    id: "HsKj2k1Vx1cDm3aKlUyf",
    name: "Smith",
    email: "smith@dicoding.org",
    avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
  },
];

const fakeErrorResponse = new Error('fake error');

describe('asyncPopulateUsersAndThreads thunk', () => {
  beforeEach(() => {
    // backup original
    api._getAllUsers = api.getAllUsers;
    api._getAllThreads = api.getAllThreads;
  });

  afterEach(() => {
    // restore original
    api.getAllUsers = api._getAllUsers;
    api.getAllThreads = api._getAllThreads;

    // delete backup
    delete api.getAllUsers;
    delete api.getAllThreads;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    api.getAllUsers = () => Promise.resolve(fakeUsers);
    api.getAllThreads = () => Promise.resolve(fakeResponse);

    const dispatch = jest.fn();

    // action
    await asyncPopulateUsersAndThreads()(dispatch);
    /* eslint-disable no-undef */

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(receiveThreadsActionCreator(fakeResponse));
    expect(dispatch).toHaveBeenCalledWith(receiveUsersActionCreator(fakeUsers));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // arrange
    api.getAllUsers = () => Promise.reject(fakeErrorResponse);
    api.getAllThreads = () => Promise.reject(fakeErrorResponse);

    const dispatch = jest.fn();

    window.alert = jest.fn();

    // action
    await asyncPopulateUsersAndThreads()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});
