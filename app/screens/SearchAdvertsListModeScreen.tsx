import React, {useEffect, useState} from 'react';
import {
  View,
  ActivityIndicator,
  Text,
  FlatList,
  ListRenderItem,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import EStyleSheet from 'react-native-extended-stylesheet';

import {Button, Screen} from '../components';
import {Routes} from '../navigation/routes';
import {MapIcon} from '../components/svg/icons/Map';
import {SearchAdvertsParamList} from '../navigation/SearchAdvertsStack';
import {AdvertCard} from '../components/AdvertCard';

import {useActions} from '../hooks/useActions';
import {useTypedSelector} from '../hooks/useTypedSelector';
import {Colors} from '../config';
import {Apartment} from '../data/types';
import {getAdverts, getFilteredAdverts} from '../state/selectors';
import {rems} from '../config';
import Modal from 'react-native-modal';
import {orderBy} from 'lodash';

const {height} = Dimensions.get('window');

type SearchAdvertsListScreenNavigationProp = StackNavigationProp<
  SearchAdvertsParamList,
  Routes.SEARCH_ADVERTS_LIST_MODE
>;
type RegisterScreenRouteProp = RouteProp<
  SearchAdvertsParamList,
  Routes.SEARCH_ADVERTS_LIST_MODE
>;

interface SearchAdvertsListScreenProps {
  navigation: SearchAdvertsListScreenNavigationProp;
  route: RegisterScreenRouteProp;
}

export const SearchAdvertsListScreen: React.FC<SearchAdvertsListScreenProps> = ({
  navigation,
}) => {
  // const {fetchAdverts} = useActions();
  // const {error, loading} = useTypedSelector((state) => state.advertisements);
  const adverts = useTypedSelector(getAdverts);
  const filteredAdverts = useTypedSelector(
    (state) => state.advertisements.filteredData,
  );
  const [sortedAdverts, setsortedAdverts] = useState();
  const [sortingKey, setSortingKey] = useState('');

  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const route = useRoute();

  // const sortingHandler = () => {
  //   const ads = Object.values(adverts);
  //   return orderBy(ads, ['price'], ['desc'])
  // }

  // useEffect(() => {
  //   // console.log('=====================')

  //   // console.log(sortingHandler())

  //   // console.log('=====================')
  //   if(sortingKey === 'price'){
  //     const adsArr = Object.values(adverts);
  //     const data = orderBy(adsArr, ['price'], ['desc'])
  //     console.log(data)
  //     setAds(Object.keys(data))
  //   } else {

  //     setAds(Object.keys(adverts))
  //   }

  // }, [adverts, sortingKey]);

  useEffect(() => {
    const adsArr = adverts;
    if (sortingKey === 'price') {
      const data = orderBy(adsArr, ['price'], ['desc']);
      setsortedAdverts(data);
      // console.log(arr)
    } else if (sortingKey === 'area') {
      const data = orderBy(adsArr, ['area'], ['desc']);
      setsortedAdverts(data);
    }
  }, [sortingKey]);

  const renderAdvert: ListRenderItem<any> = ({item}) => {
    console.log(item);
    return (
      <View style={styles.row}>
        <AdvertCard advert={item} />
      </View>
    );
  };

  console.log(route, 'params');

  return (
    <Screen style={styles.screen}>
      {/* {error && <Text>{error}</Text>}
      {loading && (
        <View style={styles.loading}>
          <ActivityIndicator
            color={Colors.loadingIndicatorColor}
            size="small"
          />
        </View>
      )} */}

      <View style={[styles.buttonContainer, styles.row]}>
        <Button
          leftIcon={<MapIcon />}
          type="outline"
          color="smoke"
          title="Сортировка объектов"
          onPress={() => {
            toggleModal();
          }}
          buttonStyle={[styles.btnStyle, {flex: 2, marginRight: 8}]}
          titleStyle={styles.titleStyle}
        />
        <Button
          leftIcon={<MapIcon />}
          type="outline"
          color="smoke"
          title="На карте"
          onPress={() => navigation.navigate(Routes.SEARCH_ADVERTS_MAP_MODE)}
          buttonStyle={[styles.btnStyle, {flex: 1}]}
          titleStyle={styles.titleStyle}
        />
      </View>

      <FlatList
        keyExtractor={(item, index) => index.toString()}
        // data={ads}
        data={
          !!sortedAdverts
            ? sortedAdverts
            : route.params?.isFilter
            ? filteredAdverts
            : adverts
        }
        // data={Object.keys(adverts)}
        renderItem={renderAdvert}
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={false}
        bounces={false}
      />

      <Modal
        isVisible={isModalVisible}
        onSwipeComplete={toggleModal}
        swipeDirection={['up', 'down']}
        style={styles.view}>
        <View style={styles.content}>
          <View
            style={{
              width: '100%',
              borderRadius: 19,
              borderWidth: 1,
              borderColor: '#E7EAF0',
              marginBottom: 25,
            }}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                setSortingKey('price');
                toggleModal();
              }}
              style={{
                borderBottomWidth: 1,
                borderColor: '#E7EAF0',
                // height: 55,
                flexDirection: 'row',
                alignItems: 'center',
                padding: 20,
                backgroundColor: sortingKey === 'price' ? '#F4F7FB' : 'white',
              }}>
              <Text style={{fontSize: 15, color: '#4F5154'}}>По стоимости</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                setSortingKey('area');
                toggleModal();
              }}
              style={{
                borderBottomWidth: 1,
                borderColor: '#E7EAF0',
                // height: 55,
                flexDirection: 'row',
                alignItems: 'center',
                padding: 20,
                backgroundColor: sortingKey === 'area' ? '#F4F7FB' : 'white',
              }}>
              <Text style={{fontSize: 15, color: '#4F5154'}}>По площади</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </Screen>
  );
};

const styles = EStyleSheet.create({
  screen: {
    padding: 20,
  },
  row: {
    marginBottom: rems[20],
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnStyle: {
    borderColor: '#DADADA',
    height: '2.6rem',
  },
  titleStyle: {
    color: '#70757C',
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  content: {
    height: height / 2,
    backgroundColor: 'white',
    padding: 10,
    // justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 21,
    // borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
});
