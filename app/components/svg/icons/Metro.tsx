import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../../../utility/types';

export const MetroIcon: React.FC<IconProps> = ({color = '#F60A12'}) => (
  <Svg width="20" height="14" viewBox="0 0 20 14" fill="none">
    <Path
      d="M13.829 0.0610242L13.6607 0.0607392L10.0855 7.17352L6.38168 0L1.31055 12.9592H0V14H7.17963V12.9592H5.75505L7.17963 8.90901L10.0855 14L12.8777 8.90901L14.302 12.9592H12.8777V14H20V12.9592H18.7661L13.829 0.0610242Z"
      fill={color}
    />
  </Svg>
);
