import {TouchableOpacityProps} from 'react-native';

export interface IButton extends TouchableOpacityProps {
  title: string;
  icon?: React.ReactNode;
}
