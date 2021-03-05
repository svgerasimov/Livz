import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../../../utility/types';
import {withTouchable} from '../../../HOC';

const Icon: React.FC<IconProps> = ({color = '#1F4277'}) => (
  <Svg width="8" height="5" viewBox="0 0 8 5" fill="none">
    <Path
      d="M3.64645 4.35355C3.84171 4.54882 4.15829 4.54882 4.35355 4.35355L7.53553 1.17157C7.7308 0.97631 7.7308 0.659728 7.53553 0.464466C7.34027 0.269204 7.02369 0.269204 6.82843 0.464466L4 3.29289L1.17157 0.464466C0.97631 0.269204 0.659728 0.269204 0.464466 0.464466C0.269204 0.659729 0.269204 0.976311 0.464466 1.17157L3.64645 4.35355ZM3.5 3L3.5 4L4.5 4L4.5 3L3.5 3Z"
      fill={color}
    />
  </Svg>
);

export const ArrowDownIcon = withTouchable(Icon);
