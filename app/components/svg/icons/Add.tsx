import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../../../utility/types';

export const AddIcon: React.FC<IconProps> = ({color = 'white'}) => (
  <Svg width="19" height="19" viewBox="0 0 19 19" fill="none">
    <Path
      d="M9.5 0C14.7384 0 19 4.26164 19 9.5C19 14.7384 14.7384 19 9.5 19C4.26164 19 0 14.7384 0 9.5C0 4.26164 4.26164 0 9.5 0ZM9.5 17.6429C13.9901 17.6429 17.6429 13.9901 17.6429 9.5C17.6429 5.00988 13.9901 1.35713 9.5 1.35713C5.00988 1.35713 1.35713 5.00988 1.35713 9.5C1.35713 13.9901 5.00988 17.6429 9.5 17.6429Z"
      fill={color}
    />
    <Path
      d="M9.5 4.97618C9.8748 4.97618 10.1786 5.27996 10.1786 5.65476V13.3452C10.1786 13.72 9.8748 14.0238 9.5 14.0238C9.1252 14.0238 8.82142 13.72 8.82142 13.3452V5.65476C8.82142 5.27996 9.1252 4.97618 9.5 4.97618Z"
      fill={color}
    />
    <Path
      d="M5.65476 8.82142H13.3452C13.72 8.82142 14.0238 9.1252 14.0238 9.5C14.0238 9.8748 13.72 10.1786 13.3452 10.1786H5.65476C5.27996 10.1786 4.97618 9.8748 4.97618 9.5C4.97618 9.1252 5.27996 8.82142 5.65476 8.82142Z"
      fill={color}
    />
  </Svg>
);