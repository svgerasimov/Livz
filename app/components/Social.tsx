import React from 'react';
import {Text, View, TouchableOpacity, StyleProp, ViewStyle} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {rems} from '../config';

interface SocialProps {
  color: string;
  onPress: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  Icon: React.ComponentType<any>;
}

export const Social: React.FC<SocialProps> = ({
  color,
  onPress,
  containerStyle = {},
  Icon,
  ...props
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      {...props}
      onPress={onPress}
      style={[styles.container, containerStyle, {backgroundColor: color}]}>
      <Icon />
    </TouchableOpacity>
  );
};

const styles = EStyleSheet.create({
  container: {
    width: rems[42],
    height: rems[42],
    borderRadius: rems[7],
    justifyContent: 'center',
    alignItems: 'center',
  },
});
