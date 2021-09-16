import React, {useEffect} from 'react';
import {
  View,
  Alert,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';

import {Button, Screen, AuthHeader, Row} from '../components';
import {Colors, size} from '../config';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp, useRoute} from '@react-navigation/native';
import {AuthStackParamList} from '../navigation/AuthNavigator';
import {Routes} from '../navigation/routes';
import {useActions} from '../hooks';
import {useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

export const NewsScreen = ({}) => {
  const route = useRoute();
  const news = useSelector((state) =>
    state.news.news.find((el) => el.id === route.params.id),
  );

  const otherNews = useSelector((state) =>
    state.news.news.filter((el) => el.id !== route.params.id),
  );

  const FlatListItem = ({item, containerStyle = {}, titleStyle = {}}: any) => (
    <View style={[styles.cardContainer, containerStyle]}>
      <ImageBackground
        style={{flex: 1}}
        resizeMode="cover"
        source={
          item.image
            ? {uri: `https://livz.ru/${item.image}`}
            : require('../assets/img/news_1.png')
        }>
        <LinearGradient
          style={styles.linearGradient}
          colors={['rgba(26, 28, 31, 0.21)', 'rgba(26, 28, 31, 0.63)']}>
          <Text style={[styles.cardTitleStyle, titleStyle]}>{item.title}</Text>
        </LinearGradient>
      </ImageBackground>
    </View>
  );

  return (
    <Screen style={styles.screen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        alwaysBounceVertical={false}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{news.title}</Text>
        </View>
        <Text style={[styles.subtitle, {marginBottom: 14}]}>{news.text}</Text>
        <View style={styles.contentBlock}>
          <Row style={styles.row}>
            <Text style={styles.title}>Другие новости</Text>
          </Row>
          <Row style={styles.row}>
            <FlatList
              keyExtractor={(item, index) => index.toString()}
              bounces={false}
              alwaysBounceHorizontal={false}
              showsHorizontalScrollIndicator={false}
              horizontal
              data={otherNews}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate(Routes.NEWS, {id: item.id})
                  }>
                  <FlatListItem
                    key={item}
                    item={item}
                    containerStyle={styles.cardContainerNews}
                    titleStyle={styles.categoriesCardTitle}
                  />
                </TouchableOpacity>
              )}
            />
          </Row>
        </View>
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 36,
  },
  textContainer: {
    marginBottom: 14,
    marginTop: 21,
  },
  title: {
    fontSize: 21,
    fontFamily: 'PT Sans Caption',
    fontWeight: '400',
    color: '#171b22',
  },
  subtitle: {
    fontSize: 14,
    color: '#383838',
    fontFamily: 'PT Sans Caption',
    fontWeight: '400',
  },
  clearButton: {
    marginTop: 20,
  },
  clearButtonTitle: {
    textDecorationLine: 'underline',
  },
  contentBlock: {
    marginBottom: 25,
  },
  row: {
    marginTop: 16,
  },
  cardContainerNews: {
    width: 302,
    height: 181,
    borderRadius: 6,
  },
  cardContainer: {
    overflow: 'hidden',
    marginRight: 10,
  },
  categoriesCardTitle: {
    fontSize: 14,
  },
  linearGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 10,
  },
  cardTitleStyle: {
    color: 'white',
    fontWeight: '700',
  },
});
