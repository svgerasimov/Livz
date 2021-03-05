import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../../../utility/types';

export const FacebookIcon: React.FC<IconProps> = ({color = 'white'}) => (
  <Svg width="9" height="17" viewBox="0 0 9 17" fill="none">
    <Path
      d="M5.54348 5.84375V3.71875C5.54348 3.13225 6.04017 2.65625 6.65217 2.65625H7.76087V0H5.54348C3.70637 0 2.21739 1.42694 2.21739 3.1875V5.84375H0V8.5H2.21739V17H5.54348V8.5H7.76087L8.86957 5.84375H5.54348Z"
      fill="white"
    />
  </Svg>
);
