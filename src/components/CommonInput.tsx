import {AccountIcon, PasswordIcon} from 'assets/svg';
import React, {useMemo} from 'react';
import {StyleSheet, TextInput, TextInputProps, View} from 'react-native';
import {Colors} from 'theme';
import {IInput} from '../types/app';

export const CommonInput = ({
  icon,
  style,
  onChangeText,
  value,
  secureTextEntry,
  placeholder,
  keyboardType,
}: IInput) => {
  const _icon = useMemo(() => {
    if (icon === 'people') {
      return <AccountIcon />;
    } else if (icon === 'password') {
      return <PasswordIcon />;
    } else {
      return <></>;
    }
  }, [icon]);
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        style={[style, styles.txtInput]}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
      <PasswordIcon />
      {/* <View style={styles.icon}>{_icon}</View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
  },
  txtInput: {
    position: 'absolute',
  },
  icon: {
    position: 'absolute',
  },
});
