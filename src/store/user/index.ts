import {IUser} from '../types';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: IUser = {
  email: '',
  name: '',
  avatarUrl: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    onLoginSuccess: (state, action: PayloadAction<IUser>) => {
      state = action.payload;
    },
  },
});

// Actions
export const {onLoginSuccess} = userSlice.actions;
export default userSlice.reducer;
