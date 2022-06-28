import {useCallback, useState, useEffect, useRef} from 'react';

export const useLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const _isMounted = useRef(true);

  useEffect(() => {
    return () => {
      _isMounted.current = false;
    };
  }, []);

  const onInputUsername = useCallback((_txt: string) => {
    setUsername(_txt);
  }, []);
  const onInputPassword = useCallback((_txt: string) => {
    setPassword(_txt);
  }, []);

  const onSubmitLogin = useCallback(() => {
    setLoading(true);
  }, []);

  return {
    username,
    password,
    loading,
    onInputUsername,
    onInputPassword,
    onSubmitLogin,
    setLoading,
  };
};
