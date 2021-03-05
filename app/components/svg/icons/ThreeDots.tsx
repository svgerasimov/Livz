import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../../../utility/types';

export const ThreeDotsIcon: React.FC<IconProps> = ({color = 'white'}) => (
  <Svg width="4" height="20" viewBox="0 0 4 20" fill="none">
    <Path
      d="M4 2C4 3.10457 3.10457 4 2 4C0.89543 4 0 3.10457 0 2C0 0.89543 0.89543 0 2 0C3.10457 0 4 0.89543 4 2Z"
      fill={color}
    />
    <Path
      d="M4 10C4 11.1046 3.10457 12 2 12C0.89543 12 0 11.1046 0 10C0 8.89543 0.89543 8 2 8C3.10457 8 4 8.89543 4 10Z"
      fill={color}
    />
    <Path
      d="M4 18C4 19.1046 3.10457 20 2 20C0.89543 20 0 19.1046 0 18C0 16.8954 0.89543 16 2 16C3.10457 16 4 16.8954 4 18Z"
      fill={color}
    />
  </Svg>
);