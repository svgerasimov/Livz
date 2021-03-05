import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const Separator = ({style = {}, ...props}) => {
  return <View style={[styles.separator, style]} {...props} />;
};

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: '#DFE3EA',
  },
});
