import React from 'react';

import {
  TouchableOpacity,
  TouchableHighlight,
  GestureResponderEvent,
} from 'react-native';

interface TouchableComponentProps {
  onPress?: (event: GestureResponderEvent) => void;
  width?: number;
  height?: number;
  color?: string;
}

export const withTouchable = (WrappedComponent: React.ComponentType<any>) => {
  const TouchableComponent: React.FC<any> = ({
    onPress = () => {},
    style = {},
    ...props
  }) => {
    return (
      <TouchableOpacity style={style} activeOpacity={0.7} onPress={onPress}>
        <WrappedComponent {...props} />
      </TouchableOpacity>
    );
  };

  return TouchableComponent;
};
