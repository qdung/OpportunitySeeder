import React, {memo, useEffect} from 'react';
import {CommonInput, ModalLoading, SafeAreaViewProvider} from 'components';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {AccountIcon, CircleVector, PasswordIcon} from 'assets/svg';
import {styles} from './style';
import LinearGradient from 'react-native-linear-gradient';
import {useLogin} from './useLogin';
import {Colors} from 'theme';
import isEqual from 'react-fast-compare';
import {CustomButton} from 'components/CustomButton';

export const _Login = () => {
  const {
    username,
    password,
    loading,
    onInputUsername,
    onInputPassword,
    onSubmitLogin,
  } = useLogin();
  return (
    // <SafeAreaViewProvider>
    <ScrollView contentContainerStyle={styles.container}>
      <LinearGradient
        colors={['#fba3f4', '#f948a9']}
        style={styles.container}
      />
      <ModalLoading visible={loading} />
    </ScrollView>
    // </SafeAreaViewProvider>
  );
};

export const Login = memo(_Login, isEqual);
