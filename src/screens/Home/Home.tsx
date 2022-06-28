import {CommonInput, SafeAreaViewProvider} from 'components';
import {useAppSelector} from 'hooks';
import React, {memo, useEffect} from 'react';
import {Text, View} from 'react-native';
import {getUser} from '../../selectors/app';
import {styles} from './style';
import isEqual from 'react-fast-compare';

const _Home = () => {
  const username = useAppSelector(getUser);
  return (
    <SafeAreaViewProvider>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.loiChua}>
            <Text>Lời Chúa là ngọn đèn soi cho con bước</Text>
            <Text>Là ánh sáng chỉ đường con đi (Tv 119, 105)</Text>
          </View>
          <Text>Xin chào, {(username as any) ?? 'User'}</Text>
          <Text>Công việc ngày hôm nay</Text>
        </View>
      </View>
    </SafeAreaViewProvider>
  );
};

export const Home = memo(_Home, isEqual);
