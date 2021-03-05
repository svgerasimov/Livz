import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../../../utility/types';

export const ZoomOutIcon: React.FC<IconProps> = ({color = '#65AB3E'}) => (
  <Svg width="21" height="2" viewBox="0 0 21 2" fill="none">
    <Path
      d="M4.58968e-08 1.54995L0 0.449952L21 0.449951V1.54995L4.58968e-08 1.54995Z"
      fill={color}
    />
  </Svg>
);
