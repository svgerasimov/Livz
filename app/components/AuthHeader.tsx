import React, {useMemo} from 'react';
import {StyleSheet, View, ImageBackground, Dimensions} from 'react-native';
import {Brand} from './Brand';
import {getPercentOfTotalNumber} from '../utility';

const {height} = Dimensions.get('window');
const headerHeightPercentage = 17.6;

export const AuthHeader = (props: any) => {
  const headerHeight = useMemo(
    () => getPercentOfTotalNumber(height, headerHeightPercentage),
    [height, headerHeightPercentage],
  );

  return (
    <View style={[styles.container, {height: headerHeight}]}>
      <ImageBackground
        source={require('../assets/img/bg_green.png')}
        style={styles.image}>
        <View style={styles.brandWrapper}>
          <Brand />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderBottomLeftRadius: 27,
    borderBottomRightRadius: 27,
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
