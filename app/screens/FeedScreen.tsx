import React from 'react';
import {
  Text,
  View,
  FlatList,
  ListRenderItem,
  ImageBackground,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import {Screen, Row, AdvertCard} from '../components';
import EStyleSheet from 'react-native-extended-stylesheet';
import {rems, Colors} from '../config';
import {uid} from '../utility';
import {
  WalletIcon,
  AdditionIcon,
  SubtractionIcon,
  MultiplicationIcon,
  DeletionIcon,
} from '../components/svg/icons';
import LinearGradient from 'react-native-linear-gradient';
import {useTypedSelector, useActions} from '../hooks';
import {getFilteredAdverts} from '../state/selectors';

type Category = {
  id: string;
  image: any;
  title: string;
};

const {width} = Dimensions.get('window');

const CATEGORIES: Category[] = [
  {
    id: uid(),
    image: require('../assets/img/house.png'),
    title: 'Новостройки',
  },
  {
    id: uid(),
    image: require('../assets/img/newBuilding.png'),
    title: 'Коттеджи',
  },
  {
    id: uid(),
    image: require('../assets/img/newBuilding.png'),
    title: 'Квартиры',
  },
];

const NEWS: Category[] = [
  {
    id: uid(),
    image: require('../assets/img/news_1.png'),
    title: 'Ставки на ипотеку стали ниже с 2020 года',
  },
  {
    id: uid(),
    image: require('../assets/img/news_1.png'),
    title: 'Ставки на ипотеку стали ниже с 2020 года',
  },
];

export const FeedScreen = () => {
  const {fetchAdverts} = useActions();
  const {error, loading} = useTypedSelector((state) => state.advertisements);
  // const adverts = useTypedSelector(getFilteredAdverts);

  const adverts = useTypedSelector((state) => state.advertisements.data);
  const FlatListItem = ({item, containerStyle = {}, titleStyle = {}}: any) => (
    <View style={[styles.cardContainer, containerStyle]}>
      <ImageBackground style={{flex: 1}} resizeMode="cover" source={item.image}>
        <LinearGradient
          style={styles.linearGradient}
          colors={['rgba(26, 28, 31, 0.21)', 'rgba(26, 28, 31, 0.63)']}>
          <Text style={[styles.cardTitleStyle, titleStyle]}>{item.title}</Text>
        </LinearGradient>
      </ImageBackground>
    </View>
  );

  React.useEffect(() => {
    fetchAdverts();
  }, []);

  return (
    <Screen style={styles.screen}>
      {error && <Text>{error}</Text>}
      {loading && (
        <View style={styles.loading}>
          <ActivityIndicator
            color={Colors.loadingIndicatorColor}
            size="small"
          />
        </View>
      )}

      {!error && !loading && (
        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={false}
          alwaysBounceVertical={false}>
          <View style={styles.contentBlock}>
            <Row style={styles.row}>
              <Text style={styles.title}>Популярные категории</Text>
            </Row>
            <Row style={styles.row}>
              <FlatList
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={styles.flatListContainerStyle}
                bounces={false}
                alwaysBounceHorizontal={false}
                showsHorizontalScrollIndicator={false}
                horizontal
                data={CATEGORIES}
                renderItem={({item}) => (
                  <FlatListItem
                    item={item}
                    containerStyle={styles.cardContainerCategories}
                    titleStyle={styles.categoriesCardTitle}
                  />
                )}
              />
            </Row>
          </View>
          <View style={styles.contentBlock}>
            <Row style={styles.row}>
              <Text style={styles.title}>Новости</Text>
            </Row>
            <Row style={styles.row}>
              <FlatList
                keyExtractor={(item, index) => index.toString()}
                bounces={false}
                alwaysBounceHorizontal={false}
                showsHorizontalScrollIndicator={false}
                horizontal
                data={NEWS}
                renderItem={({item}) => (
                  <FlatListItem
                    key={item}
                    item={item}
                    containerStyle={styles.cardContainerNews}
                    titleStyle={styles.categoriesCardTitle}
                  />
                )}
              />
            </Row>
          </View>

          <View style={styles.contentBlock}>
            <Row style={styles.row}>
              <Text style={styles.title}>Услуги</Text>
            </Row>
            <Row style={styles.row}>
              <TouchableOpacity
                style={styles.service}
                activeOpacity={0.85}
                onPress={() => {}}>
                <View
                  style={{
                    marginRight: 16,
                    flexDirection: 'row',
                  }}>
                  <View>
                    <SubtractionIcon />
                    <AdditionIcon />
                  </View>
                  <View>
                    <MultiplicationIcon />
                    <DeletionIcon />
                  </View>
                </View>
                <Text style={styles.serviceTitle}>Оценка имущества</Text>
              </TouchableOpacity>
            </Row>
            <Row style={styles.row}>
              <TouchableOpacity
                style={styles.service}
                activeOpacity={0.85}
                onPress={() => {}}>
                <View style={{marginRight: 16}}>
                  <WalletIcon />
                </View>
                <Text style={styles.serviceTitle}>
                  Помощь ипотечного брокера
                </Text>
              </TouchableOpacity>
            </Row>
          </View>
          <View style={styles.contentBlock}>
            <Row style={styles.row}>
              <Text style={styles.title}>Рекомендации</Text>
            </Row>
            <Row style={styles.row}>
              {/* {Object.keys(adverts).map((advertId) => (
                  <AdvertCard id={advertId} />
                ))} */}
              <FlatList
                keyExtractor={(item, index) => index.toString()}
                bounces={false}
                alwaysBounceHorizontal={false}
                showsHorizontalScrollIndicator={false}
                horizontal
                data={Object.keys(adverts)}
                renderItem={({item}) => (
                  <View style={styles.advertCard}>
                    <AdvertCard id={item} />
                  </View>
                )}
              />
            </Row>
          </View>
        </ScrollView>
      )}
    </Screen>
  );
};

const styles = EStyleSheet.create({
  $padding: rems[20],
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen: {
    padding: '$padding',
  },
  advertCard: {
    width: '100% - 40',
    marginRight: 8,
  },
  contentBlock: {
    marginBottom: rems[25],
  },
  row: {
    marginTop: rems[16],
  },
  title: {
    color: '#171B22',
    fontSize: rems[21],
  },
  cardContainer: {
    overflow: 'hidden',
    marginRight: rems[10],
  },
  cardContainerCategories: {
    width: rems[157],
    height: rems[112],
    borderRadius: rems[3],
  },
  cardContainerNews: {
    width: rems[302],
    height: rems[181],
    borderRadius: rems[6],
  },
  cardTitleStyle: {
    color: 'white',
    fontWeight: '700',
  },
  linearGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: rems[10],
  },
  categoriesCardTitle: {
    fontSize: rems[14],
  },
  newsCardTitle: {
    fontSize: rems[18],
  },
  service: {
    // alignSelf: 'center',
    marginHorizontal: rems[3],
    borderRadius: rems[6],
    padding: rems[20],
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    // borderWidth: 1,
    borderColor: 'red',
  },
  serviceTitle: {
    color: '#191A1C',
    fontWeight: '500',
    fontSize: rems[18],
  },
});
