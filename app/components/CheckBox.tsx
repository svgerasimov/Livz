import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const CheckBox = ({
  selected = false,
  onPress = () => {},
  style = {},
  textStyle = {},
  size = 30,
  color = '#E7EAF0',
  text = '',
  ...props
}) => (
  <TouchableOpacity
    activeOpacity={0.9}
    style={[styles.checkBox, style]}
    onPress={onPress}
    {...props}>
    <Icon
      size={size}
      color={color}
      name={selected ? 'check-box-outline' : 'checkbox-blank-outline'}
    />

    <Text style={textStyle}> {text} </Text>
  </TouchableOpacity>
);

const styles = EStyleSheet.create({
  checkBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
