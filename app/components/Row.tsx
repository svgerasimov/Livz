import React from 'react';
import {View, ViewStyle, StyleProp} from 'react-native';

interface RowProps {
  style?: StyleProp<ViewStyle>;
}

export const Row: React.FC<RowProps> = ({children, ...props}) => {
  return <View {...props}>{children}</View>;
};
