import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Screen} from '../components';
import {
  ZoomInIcon,
  ZoomOutIcon,
  FingerIcon,
  PointerIcon,
} from '../components/svg/icons';
import {withTouchable} from '../HOC';
import EStyleSheet from 'react-native-extended-stylesheet';
import {rems} from '../config';

export const SearchAdvertsMapScreen = () => {
  return (
    <Screen style={{}}>
      <View
        style={{
          flex: 1,
        }}>
        <ImageBackground
          resizeMode="cover"
          source={require('../assets/img/backgroundMap.png')}
          style={{flex: 1}}>
          <View
            style={{
              width: '100%',
              backgroundColor: 'rgba(255, 255, 255, 0.85)',
              padding: 20,
            }}>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#ECECEC',
                borderRadius: 50,
              }}>
              <TextInput
                placeholder="Москва, улица Пушкина, Дом Колотушкина"
                style={{height: 45, alignSelf: 'center', fontSize: 13}}
              />
            </View>
          </View>

          <View style={{position: 'absolute', bottom: 65, right: 20}}>
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={() => {}}
              style={styles.button}>
              <ZoomInIcon />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={() => {}}
              style={styles.button}>
              <ZoomOutIcon />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={() => {}}
              style={styles.button}>
              <PointerIcon />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={() => {}}
              style={styles.button}>
              <FingerIcon />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </Screen>
  );
};

const styles = EStyleSheet.create({
  $buttonWidth: rems[43],
  button: {
    width: '$buttonWidth',
    height: '$buttonWidth',
    borderRadius: '$buttonWidth / 2',
    backgroundColor: 'white',
    shadowColor: 'rgba(0,0,0,.8)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: rems[16],
  },
});
