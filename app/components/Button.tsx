import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ButtonProps as RNButtonProps,
  StyleProp,
  ViewStyle,
  TextStyle,
  Platform,
  TouchableNativeFeedback,
  ActivityIndicator,
} from 'react-native';
import {Colors, Fonts, Metrics} from '../config';

type ViewProps = StyleProp<ViewStyle>;
type TextProps = StyleProp<TextStyle>;

interface ButtonProps extends RNButtonProps {
  buttonStyle?: ViewProps;
  titleStyle?: TextProps;
  type?: 'solid' | 'clear' | 'outline';
  leftIcon?: React.ReactNode;
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  loading = false,
  leftIcon = undefined,
  title = '',
  onPress = () => {},
  color = 'green',
  buttonStyle = {},
  titleStyle = {},
  type = 'solid',
  ...otherProps
}) => {
  let customButtonStyles: ViewProps = {
    backgroundColor: '',
    borderColor: '',
    borderWidth: 1,
  };
  let customTitleStyles: TextProps = {color: Colors.white};
  switch (color) {
    case 'dark': {
      customButtonStyles.backgroundColor = Colors.darkButton;
      customButtonStyles.borderColor = Colors.darkButton;
      break;
    }
    case 'green': {
      customButtonStyles.backgroundColor = Colors.greenButton;
      customButtonStyles.borderColor = Colors.greenButton;
      break;
    }
    case 'smoke': {
      customButtonStyles.backgroundColor = Colors.smokeButton;
      customButtonStyles.borderColor = Colors.smokeButton;
      customTitleStyles.color = Colors.buttonTextSmoke;
      break;
    }
  }

  if (type === 'outline') {
    customButtonStyles.backgroundColor = 'transparent';
    customTitleStyles.color = Colors.buttonTextOutline;
  }
  if (type === 'clear') {
    customButtonStyles.backgroundColor = 'transparent';
    customButtonStyles.height = 'auto';
    customButtonStyles.width = 'auto';
    customButtonStyles.borderWidth = 0;
    customTitleStyles.color = Colors.buttonTextClear;
  }

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[styles.button, customButtonStyles, buttonStyle]}
      {...otherProps}
      onPress={onPress}>
      {!loading ? (
        <>
          {leftIcon}
          <Text
            style={[
              styles.text,
              customTitleStyles,
              titleStyle,
              !!leftIcon && {marginLeft: 14},
            ]}>
            {title}
          </Text>
        </>
      ) : (
        <ActivityIndicator
          color={Colors.white}
          size="small"
          animating={loading}
        />
      )}

      {/* <ActivityIndicator color="red" size="small" animating={loading} /> */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: Metrics.buttonBorderRadius,
    justifyContent: 'center',
    alignItems: 'center',
    height: Metrics.buttonHeight,
    width: Metrics.buttonWidth,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  text: {
    fontSize: Fonts.size.btnText,
  },
});
