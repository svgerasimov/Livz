import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../../../utility/types';
import {withTouchable} from '../../../HOC';

const Icon: React.FC<IconProps> = ({color = '#1F4277'}) => (
  <Svg width="8" height="5" viewBox="0 0 8 5" fill="none">
    <Path
      d="M3.64645 0.646447C3.84171 0.451184 4.15829 0.451185 4.35355 0.646447L7.53553 3.82843C7.7308 4.02369 7.7308 4.34027 7.53553 4.53553C7.34027 4.7308 7.02369 4.7308 6.82843 4.53553L4 1.70711L1.17157 4.53553C0.97631 4.7308 0.659728 4.7308 0.464466 4.53553C0.269204 4.34027 0.269204 4.02369 0.464466 3.82843L3.64645 0.646447ZM3.5 2L3.5 1L4.5 1L4.5 2L3.5 2Z"
      fill={color}
    />
  </Svg>
);

export const ArrowUpIcon = withTouchable(Icon);
