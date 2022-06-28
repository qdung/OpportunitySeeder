import React from 'react';
import {ActivityIndicator, Modal, StyleSheet, Text, View} from 'react-native';
import {Colors} from 'theme';
import {IModalCustom} from 'types/app';
import {scaleWidth, scaleHeight} from 'utils/responsive';
import {t} from 'i18next';

export const ModalLoading = (props: IModalCustom) => {
  return (
    <Modal animationType="slide" transparent={true} visible={props.visible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.wait}>{t('loading')}</Text>
          <ActivityIndicator size="large" />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(112, 112, 112, 0.7)',
  },
  modalView: {
    width: scaleWidth(50),
    height: scaleHeight(25),
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  wait: {
    color: Colors.status,
    marginVertical: 10,
    fontSize: 17,
    // fontFamily: 'Poppins-Regular',
  },
});
