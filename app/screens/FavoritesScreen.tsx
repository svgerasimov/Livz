import React, {useEffect} from 'react';
import {Text, View, ImageBackground} from 'react-native';
import {Screen, Row} from '../components';
import EStyleSheet from 'react-native-extended-stylesheet';
import {AdvertCard} from '../components/AdvertCard';
import {useActions, useTypedSelector} from '../hooks';
import {getFavorites} from '../state/selectors';
import {rems} from '../config';
import FastImage from 'react-native-fast-image';

export const FavoritesScreen = () => {
  const {fetchFavorite} = useActions();
  const ids = useTypedSelector(getFavorites);

  useEffect(() => {
    fetchFavorite();
  }, []);

  return (
    <Screen style={styles.screen}>
      {ids.length > 0 ? (
        ids.map((id) => (
          <Row key={id} style={styles.row}>
            <AdvertCard advert={id} />
          </Row>
        ))
      ) : (
        <View style={{flex: 1, alignItems: 'center'}}>
          <Row style={[styles.row, {marginTop: 60}]}>
            <ImageBackground
              style={{
                width: 100,
                height: 83,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              source={require('../assets/img/Heart.png')}>
              <FastImage
                style={{width: 25, height: 25}}
                source={require('../assets/img/SadSmile.png')}
              />
            </ImageBackground>
          </Row>
          <Row style={styles.row}>
            <Text
              style={{
                color: '#484A4D',
                fontSize: 17,
                textAlign: 'center',
                paddingHorizontal: 10,
              }}>
              Вы пока не добавили в избранное ни одного объекта
            </Text>
          </Row>
        </View>
      )}
    </Screen>
  );
};

const styles = EStyleSheet.create({
  screen: {
    padding: rems[20],
    // backgroundColor: '#ccc',
  },
  row: {
    marginBottom: rems[20],
  },
});
