import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { receiveThreadDetailActionCreator } from '../threadDetail/action';
import { receiveUsersActionCreator } from '../users/action';

function asyncPopulateUsersAndThreads() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const users = await api.getAllUsers();
      const threads = await api.getAllThreads();

      dispatch(receiveUsersActionCreator(users));
      dispatch(receiveThreadDetailActionCreator(threads));
    } catch (error) {
      console.log(error);
    }
    dispatch(hideLoading());
  };
}

export default asyncPopulateUsersAndThreads;
