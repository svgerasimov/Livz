import React from 'react';
import {View, ViewProps, TextProps} from 'react-native';
import {CardTitle} from './title';
import {CardDescription} from './description';
import {CardButton} from './button';

interface CardSubComponents {
  Title: React.FC<TextProps>;
  Description: React.FC<TextProps>;
  Buttons: React.FC<ViewProps>;
}

export const Card: React.FC<ViewProps> & CardSubComponents = ({
  children,
  ...attributes
}) => <View {...attributes}>{children}</View>;

Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Buttons = CardButton;
