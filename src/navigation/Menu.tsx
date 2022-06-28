import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Divider} from 'react-native-paper';
import AccountIcon from 'assets/svg/AccountIcon';
import {NavigationService, Routes} from 'navigation';
import {Colors} from 'theme';
import {useAppSelector, useMenu} from 'hooks';
import {navigationRef} from './NavigationService';
import {getUser} from '../selectors/app';

export const MenuList = () => {
  const navigation = useNavigation();
  const {onSignOut} = useMenu();
  const currentRoute = navigationRef.current?.getCurrentRoute();
  const username = useAppSelector(getUser);

  return (
    <View style={styles.leftMenuContainer}>
      <View style={styles.leftHeader}>
        <TouchableOpacity style={styles.user}>
          <AccountIcon />
          <Text style={styles.txtUser}>{(username as any) ?? ' User'}</Text>
        </TouchableOpacity>
        <Divider />
        <TouchableOpacity
          style={[
            styles.user,
            currentRoute?.name === Routes.Home ? styles.selected : {},
          ]}
          onPress={() => NavigationService.navigate(Routes.Home)}>
          <Text
            style={[
              styles.txtUser,
              currentRoute?.name === Routes.Home ? styles.selectedTxt : {},
            ]}>
            Trang chủ
          </Text>
        </TouchableOpacity>
        <Divider />
        <TouchableOpacity
          style={[
            styles.user,
            currentRoute?.name === Routes.TraCuuThongTin ? styles.selected : {},
          ]}
          onPress={() => NavigationService.navigate(Routes.TraCuuThongTin)}>
          <Text
            style={[
              styles.txtUser,
              currentRoute?.name === Routes.TraCuuThongTin
                ? styles.selectedTxt
                : {},
            ]}>
            Tra cứu thông tin
          </Text>
        </TouchableOpacity>
        <Divider />
        <TouchableOpacity style={styles.user}>
          <Text style={styles.txtUser}>Điểm danh</Text>
        </TouchableOpacity>
        <Divider />
        <TouchableOpacity style={styles.user}>
          <Text style={styles.txtUser}>Bảng điểm</Text>
        </TouchableOpacity>
        <Divider />
        <TouchableOpacity style={styles.user}>
          <Text style={styles.txtUser}>Lịch</Text>
        </TouchableOpacity>
        <Divider />
        <TouchableOpacity style={styles.user} onPress={onSignOut}>
          <Text style={styles.signOut}>Đăng xuất</Text>
        </TouchableOpacity>
        <Divider />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  leftMenuContainer: {
    paddingTop: 50,
  },
  leftHeader: {
    marginTop: 20,
    marginBottom: 30,
  },
  user: {
    flexDirection: 'row',
    padding: 20,
  },
  userGlv: {},
  signOut: {
    color: Colors.red_primary,
  },
  txtUser: {},
  selected: {
    backgroundColor: Colors.blue_primary,
  },
  selectedTxt: {
    color: Colors.colorFolder1,
  },
});
