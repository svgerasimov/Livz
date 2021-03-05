import React from 'react';
import {Text, TextProps} from 'react-native';

export const CardTitle: React.FC<TextProps> = ({children, ...attributes}) => (
  <Text style={[attributes.style]}>{children}</Text>
);
