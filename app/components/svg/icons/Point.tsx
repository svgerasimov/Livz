import React from 'react';
import Svg, {Circle} from 'react-native-svg';
import {IconProps} from '../../../utility/types';

export const PointIcon: React.FC<IconProps> = ({color = '#79BA55'}) => (
  <Svg width="4" height="4" viewBox="0 0 4 4" fill="none">
    <Circle cx="2" cy="2" r="2" fill={color} />
  </Svg>
);
