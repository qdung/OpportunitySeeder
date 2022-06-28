import React, {useEffect, useMemo, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from './Routes';
import * as Screens from 'screens';
import {navigationRef} from './NavigationService';
import MenuNavigation from './MenuNavigation';
import {useDispatch} from 'react-redux';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const dispatch = useDispatch();

  return (
    <Stack.Navigator
      initialRouteName={Routes.Login}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={Routes.Login} component={Screens.Login} />
    </Stack.Navigator>
  );
  // if (initializing) return null;

  // if (!user) {
  //   return (
  //     <Stack.Navigator
  //       initialRouteName={Routes.Login}
  //       screenOptions={{
  //         headerShown: false,
  //       }}>
  //       <Stack.Screen name={Routes.Login} component={Screens.Login} />
  //     </Stack.Navigator>
  //   );
  // }
  // return (
  //   <Stack.Navigator
  //     initialRouteName={Routes.MenuNavigation}
  //     screenOptions={{
  //       headerShown: false,
  //     }}>
  //     <Stack.Screen name={Routes.MenuNavigation} component={MenuNavigation} />
  //   </Stack.Navigator>
  // );
};

export const Navigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <StackNavigator />
    </NavigationContainer>
  );
};
