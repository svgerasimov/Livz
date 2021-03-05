import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

interface CircleProps {
  size?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
}

export const Circle: React.FC<CircleProps> = ({
  size,
  color,
  children,
  style = {},
}) => {
  let styles = getStyles(size, color);
  return <View style={[styles.circle, style]}>{children}</View>;
};

let getStyles = function (size = 4, color = '#353A40') {
  return EStyleSheet.create({
    $color: color,
    $size: size,
    circle: {
      width: '$size',
      height: '$size',
      borderRadius: '0.5 * $size',
      backgroundColor: '$color',
    },
  });
};

// marginHorizontal: 7,
//
