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
      <LinearGradient colors={['#fba3f4', '#f948a9']} style={styles.container}>
        <Text style={styles.title}>Welcome to Thiếu Nhi Thánh Thể </Text>
        <View style={styles.loginForm}>
          <CircleVector style={styles.circle} />
          <View style={styles.row1}>
            <TextInput
              value={username}
              style={[styles.input, styles.shadow]}
              onChangeText={onInputUsername}
              placeholder={'Email'}
              placeholderTextColor={Colors.hint}
            />
            <AccountIcon style={styles.icon} />
          </View>
          <View style={styles.row2}>
            <TextInput
              value={password}
              style={[styles.input, styles.shadow]}
              onChangeText={onInputPassword}
              placeholder={'Mật khẩu'}
              placeholderTextColor={Colors.hint}
              secureTextEntry
            />
            <PasswordIcon style={styles.icon} />
          </View>
          <TouchableOpacity style={styles.forgotPass}>
            <Text style={styles.txt}>Quên mật khẩu</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.submit} onPress={onSubmitLogin}>
            <Text style={styles.txt}>Đăng nhập</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
      <ModalLoading visible={loading} />
    </ScrollView>
    // </SafeAreaViewProvider>
  );
};

export const Login = memo(_Login, isEqual);
