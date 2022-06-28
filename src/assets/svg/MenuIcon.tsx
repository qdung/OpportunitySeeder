import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const MenuIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="M19 5v14H5V5h14Zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2Z"
      fill={props.fill ?? '#323232'}
    />
    <Path
      d="M14 17H7v-2h7v2Zm3-4H7v-2h10v2Zm0-4H7V7h10v2Z"
      fill={props.fill ?? '#323232'}
    />
  </Svg>
);

export default MenuIcon;
