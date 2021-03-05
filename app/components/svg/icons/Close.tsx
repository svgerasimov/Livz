import React from 'react';
import Svg, {Path, G} from 'react-native-svg';
import {IconProps} from '../../../utility/types';
import {withTouchable} from '../../../HOC';

const Icon: React.FC<IconProps> = ({color = '#dd302f'}) => (
  <Svg
    width="13"
    height="10"
    viewBox="0 0 13 10"
    preserveAspectRatio="xMidYMid meet">
    <G
      transform="translate(0.000000,768.000000) scale(0.100000,-0.100000)"
      fill={color}
      stroke="none">
      <Path
        d="M1390 6285 l-275 -275 1085 -1085 1085 -1085 -1085 -1085 -1085
   -1085 278 -277 277 -278 1085 1085 1085 1085 1085 -1085 1085 -1085 277 278
   278 277 -1085 1085 -1085 1085 1085 1085 1085 1085 -278 277 -277 278 -1085
   -1085 -1085 -1085 -1083 1083 c-595 595 -1084 1082 -1087 1082 -3 0 -129 -124
   -280 -275z"
      />
    </G>
  </Svg>
);

export const CloseIcon = withTouchable(Icon);
