import {combineReducers} from '@reduxjs/toolkit';
import appReducer from './app';
import userReducer from './user';

export const rootReducer = combineReducers({
  app: appReducer,
  user: userReducer,
});
