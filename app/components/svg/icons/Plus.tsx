import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../../../utility/types';
import {withTouchable} from '../../../HOC';

const Icon: React.FC<IconProps> = ({color = 'white'}) => (
  <Svg width="9" height="8" viewBox="0 0 9 8" fill="none">
    <Path
      d="M0.992168 3.315H3.85717V0.465H5.14717V3.315H8.01217V4.575H5.14717V7.44H3.85717V4.575H0.992168V3.315Z"
      fill={color}
    />
  </Svg>
);

export const FlatPlusIcon = Icon;
