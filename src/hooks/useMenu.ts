import {useDispatch} from 'react-redux';

export const useMenu = () => {
  const dispatch = useDispatch();
  const onSignOut = () => {};
  return {onSignOut};
};
