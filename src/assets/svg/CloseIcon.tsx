import * as React from 'react';
import Svg, {SvgProps, G, Path} from 'react-native-svg';

const CloseIcon = (props: SvgProps) => (
  <Svg width={16} height={16} {...props}>
    <G
      data-name="Group 123"
      stroke={props.stroke ?? '#333'}
      strokeLinecap="round"
      strokeWidth={2}>
      <Path data-name="Line 3" d="m1.415 1.415 11.671 11.671" />
      <Path data-name="Line 4" d="M13.086 1.415 1.415 13.086" />
    </G>
  </Svg>
);

export default CloseIcon;
