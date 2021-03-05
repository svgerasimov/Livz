import React from 'react';
import {Text, View, ImageBackground} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Routes} from '../navigation/routes';
import {useTypedSelector} from '../hooks';

export function Header(props: any) {
  // console.log('header props', props);
  const adverts = useTypedSelector((state) => state.advertisements.data);
  const {insets, scene, rightButton, leftButton, style = {}} = props;
  return (
    <View style={[styles.container, style]}>
      <ImageBackground
        source={require('../assets/img/bg_green.png')}
        style={styles.image}>
        <View style={[styles.content, {paddingTop: insets.top / 2}]}>
          <View style={styles.leftButtonContainer}>{leftButton}</View>
          <View style={styles.titleContainer}>
            <Text style={styles.headerTitle}>
              {scene.descriptor.options.title}
            </Text>
            {scene.route.name === Routes.SEARCH_ADVERTS_LIST_MODE && (
              <Text style={styles.subtitle}>
                {Object.keys(adverts).length} объектов
              </Text>
            )}
          </View>
          <View style={styles.rightButtonContainer}>{rightButton}</View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = EStyleSheet.create({
  rightButtonContainer: {
    marginRight: 20,
    // flex: 1,
    // alignSelf: 'flex-end',
    // justifyContent: 'flex-end',
  },
  leftButtonContainer: {
    marginLeft: 20,
    marginRight: 15,
    // flex: 1,
  },
  titleContainer: {
    flex: 1,
  },
  headerTitle: {
    color: '$whiteColor',
    fontSize: '1.4rem',
    // alignSelf: 'left',
  },
  subtitle: {
    fontSize: '0.8rem',
    color: '$whiteColor',
  },
  content: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // flex: 1,
  },
  container: {
    height: 111,
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
});
