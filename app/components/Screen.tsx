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
  Header?: any;
}

export const Screen: React.FC<ScreenProps> = ({children, style, Header}) => (
  <>
    <StatusBar barStyle="light-content" />
    {Header}
    <SafeAreaView style={styles.screen}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  </>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  view: {
    flex: 1,
  },
});
