import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {t} from 'i18next';
import {IButton} from 'types';

export const CustomButton = (props: IButton) => (
  <TouchableOpacity style={styles.container} onPress={props.onPress}>
    {props.icon}
    <Text style={styles.txt}>{t(props.title)}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  txt: {},
});
