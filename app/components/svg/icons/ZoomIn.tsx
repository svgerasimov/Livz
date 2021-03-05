import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../../../utility/types';

export const ZoomInIcon: React.FC<IconProps> = ({color = '#65AB3E'}) => (
  <Svg width="21" height="22" viewBox="0 0 21 22" fill="none">
    <Path d="M9.975 0H11.025V22H9.975V0Z" fill={color} />
    <Path
      d="M4.58968e-08 11.55L0 10.45L21 10.45V11.55L4.58968e-08 11.55Z"
      fill={color}
    />
  </Svg>
);
