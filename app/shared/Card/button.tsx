import React from 'react';
import {ViewProps, View} from 'react-native';

export const CardButton: React.FC<ViewProps> = ({children, ...attributes}) => (
  <View {...attributes}>{children}</View>
);
