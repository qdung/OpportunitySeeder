import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const AccountIcon = (props: SvgProps) => (
  <Svg width={18} height={18} fill="none" {...props}>
    <Path
      d="M15.364 11.636a8.966 8.966 0 0 0-3.42-2.145 5.201 5.201 0 0 0 2.26-4.288A5.209 5.209 0 0 0 9 0a5.209 5.209 0 0 0-5.203 5.203c0 1.777.896 3.349 2.26 4.288a8.966 8.966 0 0 0-3.421 2.145A8.941 8.941 0 0 0 0 18h1.406c0-4.187 3.407-7.594 7.594-7.594s7.594 3.407 7.594 7.594H18a8.941 8.941 0 0 0-2.636-6.364ZM9 9a3.801 3.801 0 0 1-3.797-3.797A3.801 3.801 0 0 1 9 1.406a3.801 3.801 0 0 1 3.797 3.797A3.801 3.801 0 0 1 9 9Z"
      fill="#ADADAD"
    />
  </Svg>
);

export default AccountIcon;
