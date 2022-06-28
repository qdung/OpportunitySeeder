import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Routes} from './Routes';
import * as Screens from 'screens';
import {NavigationService} from 'navigation';
import {DrawerActions} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {MenuList} from './Menu';

const MenuDrawer = createDrawerNavigator();

export default function MenuNavigation() {
  const goBackOpenMenu = () => {
    NavigationService.goBack();
    NavigationService.dispatch(DrawerActions.openDrawer());
  };

  return (
    <MenuDrawer.Navigator
      screenOptions={{
        drawerPosition: 'left',
      }}
      drawerContent={MenuList}
      initialRouteName={Routes.Home}>
      <MenuDrawer.Screen name={Routes.Home} component={Screens.Home} />
      <MenuDrawer.Screen
        name={Routes.TraCuuThongTin}
        component={Screens.TraCuuThongTin}
      />
    </MenuDrawer.Navigator>
  );
}

const styles = StyleSheet.create({});
