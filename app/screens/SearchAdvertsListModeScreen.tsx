import React, {useEffect} from 'react';
import {
  View,
  ActivityIndicator,
  Text,
  FlatList,
  ListRenderItem,
} from 'react-native';
import {RouteProp} from '@react-navigation/native';
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
import {getFilteredAdverts} from '../state/selectors';
import {rems} from '../config';

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
  const adverts = useTypedSelector(getFilteredAdverts);

  useEffect(() => {
    console.log(adverts);
  }, [adverts]);

  const renderAdvert: ListRenderItem<any> = ({item}) => {
    console.log(item);
    return (
      <View style={styles.row}>
        <AdvertCard id={item} />
      </View>
    );
  };
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
          onPress={() => {}}
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

      {/* {!error && !loading && ( */}
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={Object.keys(adverts)}
        renderItem={renderAdvert}
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={false}
        bounces={false}
      />
      {/* )} */}
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
});
