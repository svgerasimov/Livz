import React from 'react';
import {StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';

export const Brand = () => {
  return (
    <>
      <View style={styles.brandWrapper}>
        <FastImage
          style={styles.logo}
          source={require('../assets/img/logo.png')}
        />
      </View>
      <FastImage
        style={styles.tagline}
        source={require('../assets/img/name.png')}
      />
    </>
  );
};

const styles = StyleSheet.create({
  brandWrapper: {
    width: 57,
    height: 57,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 57 / 2,
    marginRight: 15,
  },
  logo: {
    width: 35,
    height: 35,
  },
  tagline: {
    width: 102,
    height: 41,
  },
});
