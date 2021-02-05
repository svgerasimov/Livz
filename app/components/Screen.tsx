import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  StyleProp,
  ViewStyle,
  StatusBar,
} from 'react-native';
import {Colors} from '../config';

interface ScreenProps {
  style?: StyleProp<ViewStyle>;
  Header?: React.ReactNode;
}

export const Screen: React.FC<ScreenProps> = ({children, style, Header}) => (
  <>
    <StatusBar barStyle="light-content" />
    {/* <SafeAreaView
      style={[styles.screen, {backgroundColor: Colors.white}, style]}> */}
    {Header}
    <View style={[styles.view, style]}>{children}</View>
    {/* </SafeAreaView> */}
  </>
);
Screen.defaultProps = {
  Header: undefined,
};

const styles = StyleSheet.create({
  screen: {
    // paddingTop: 80,
    flex: 1,
  },
  view: {
    flex: 1,
  },
});
