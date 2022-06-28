import * as React from 'react';
import Svg, {SvgProps, G, Circle, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const CircleVector = (props: SvgProps) => (
  <Svg width={321} height={436} fill={props.fill} {...props}>
    <G filter="url(#a)">
      <Circle cx={103} cy={218} r={216} fill="#fff" />
    </G>
    <Defs></Defs>
  </Svg>
);

export default CircleVector;
