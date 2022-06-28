import {CloseIcon} from 'assets/svg';
import React from 'react';
import {
  ActivityIndicator,
  Image,
  Modal,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Colors} from 'theme';
import {IModalDetails} from 'types/app';
import {scaleHeight, scaleWidth} from 'utils/responsive';
import {CircleCloseIcon} from 'assets/svg';

export const ModalDetails = (props: IModalDetails) => {
  return (
    <Modal animationType="slide" transparent={true} visible={props.visible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <CircleCloseIcon style={styles.close} onPress={props.onClose} />
          <Text style={styles.title}>Thông tin chi tiết</Text>
          <Text>{props.tenThanh}</Text>
          <Text>{props.hoTen}</Text>
          <Text>{props.gioiTinh}</Text>
          <Image source={{uri: props.imgUrl}} style={styles.avatar} />
          <Text>{props.sdt}</Text>
          <Text>{props.diaChi}</Text>
          <Text>{props.ngaySinh}</Text>
          <Text>{props.giaoHo}</Text>
          <Text>
            {props.lop} - {props.glv}
          </Text>
          <Text>{props.tenThanhCha}</Text>
          <Text>{props.hoTenCha}</Text>
          <Text>{props.tenThanhMe}</Text>
          <Text>{props.hoTenMe}</Text>
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
    width: scaleWidth(85),
    height: scaleHeight(80),
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  close: {
    position: 'absolute',
    right: -5,
    top: -5,
    padding: 10,
  },
  avatar: {
    resizeMode: 'contain',
    width: 240,
    height: 240,
    borderRadius: 20,
  },
});
