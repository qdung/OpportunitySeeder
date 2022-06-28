import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const scaleWidth = (size: number) => wp(size);
export const scaleHeight = (size: number) => hp(size);
