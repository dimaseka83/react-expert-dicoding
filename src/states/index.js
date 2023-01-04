import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authUserReducer from './authUser/reducer';
import isPreloadReducer from './isPreload/reducer';
import leaderboardsReducer from './leaderboard/reducer';
import threadReducer from './thread/reducer';
import threadDetailReducer from './threadDetail/reducer';
import usersReducer from './users/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    leaderboards: leaderboardsReducer,
    thread: threadReducer,
    threadDetail: threadDetailReducer,
    users: usersReducer,
    loadingBar: loadingBarReducer,
  },
});

export default store;
