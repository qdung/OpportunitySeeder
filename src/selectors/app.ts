import {createSelector} from 'reselect';
import type {RootState} from 'store/store';

const node = (state: RootState) => state.app;

export const getSignInStatus = createSelector(node, state => state.isSignIn);

export const getUser = createSelector(node, state => state.user);
