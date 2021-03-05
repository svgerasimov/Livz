import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../../../utility/types';
import {withTouchable} from '../../../HOC';

const Icon: React.FC<IconProps> = ({color = '#65AB3E'}) => (
  <Svg width="13" height="10" viewBox="0 0 13 10" fill="none">
    <Path
      d="M11.2808 0L13 1.76127L4.95794 10L0 4.92093L1.71917 3.15966L4.95794 6.47751L11.2808 0Z"
      fill={color}
    />
  </Svg>
);

export const CheckIcon = withTouchable(Icon);
