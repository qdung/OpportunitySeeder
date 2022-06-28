import * as React from 'react';
import Svg, {SvgProps, G, Circle, Path} from 'react-native-svg';

const CircleCloseIcon = (props: SvgProps) => (
  <Svg width={30} height={30} {...props}>
    <G data-name="Group 143" stroke="#333">
      <G data-name="Ellipse 39" fill="#fff">
        <Circle cx={15} cy={15} r={15} stroke="none" />
        <Circle cx={15} cy={15} r={14.5} fill="none" />
      </G>
      <Path
        data-name="Line 88"
        fill="none"
        strokeLinecap="round"
        d="m10.691 11.172 8.137 8.137"
      />
      <Path
        data-name="Line 89"
        fill="none"
        strokeLinecap="round"
        d="m18.828 11.172-8.137 8.137"
      />
    </G>
  </Svg>
);

export default CircleCloseIcon;
