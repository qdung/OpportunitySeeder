import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IAppState, IUser} from '../types';

const initialState: IAppState = {
  isSignIn: false,
  user: {
    name: '',
    email: '',
    avatarUrl: '',
  },
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    onLoginSuccess: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    onLogout: state => {
      state.isSignIn = false;
    },
  },
});

// Actions
export const {onLoginSuccess, onLogout} = appSlice.actions;
export default appSlice.reducer;
