import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../../../utility/types';

export const GoogleIcon: React.FC<IconProps> = ({color = 'white'}) => (
  <Svg width="15" height="14" viewBox="0 0 15 14" fill="none">
    <Path
      d="M7.13281 2.54545C8.62245 2.54545 9.96992 3.30014 10.7422 4.34003L12.5726 2.51993C11.4779 1.11446 9.37088 0 7.13281 0C3.2141 0 0 3.13094 0 7C0 10.8691 3.2141 14 7.13281 14C10.3813 14 13.114 11.8491 13.9519 8.90909C14.1324 8.29808 14.2227 7.66172 14.2227 7V6.36364H7.77734V8.90859H11.1934C10.4844 10.4105 8.92458 11.4545 7.13281 11.4545C4.64499 11.4545 2.57812 9.4563 2.57812 7C2.57812 4.5437 4.64499 2.54545 7.13281 2.54545Z"
      fill={color}
    />
  </Svg>
);
