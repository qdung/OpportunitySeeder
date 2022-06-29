import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import {t} from 'i18next';
import {IButton} from 'types';

export const CustomButton = (props: IButton) => (
  <View>
    <TouchableOpacity
      style={[styles.container, props.style]}
      onPress={props.onPress}>
      {props.icon}
      <Text style={styles.txt}>{t(props.title)}</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
  },
  txt: {},
});
