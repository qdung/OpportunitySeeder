import {TextInputProps, ViewProps} from 'react-native';

export interface IInput extends TextInputProps {
  icon: string;
}

export interface IModalCustom extends ViewProps {
  title?: string;
  visible: boolean;
  save?: () => void;
}

export interface IModalDetails extends ViewProps {
  hoTen: string;
  tenThanh: string;
  imgUrl?: string;
  diaChi: string;
  sdt: string;
  lop: string;
  glv: string;
  ngaySinh: string;
  gioiTinh: string;
  giaoHo: string;
  tenThanhMe: string;
  hoTenMe: string;
  tenThanhCha: string;
  hoTenCha: string;
  visible: boolean;
  onClose: () => void;
}
