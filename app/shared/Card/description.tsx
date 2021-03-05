import React from 'react';
import {Text, TextProps} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export const CardDescription: React.FC<TextProps> = ({
  children,
  ...attributes
}) => <Text style={[styles.description, attributes.style]}>{children}</Text>;

const styles = EStyleSheet.create({
  description: {
    marginVertical: 12,
  },
});
