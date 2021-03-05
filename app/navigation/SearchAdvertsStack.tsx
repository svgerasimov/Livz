import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './routes';
import {
  SearchAdvertsListScreen,
  SearchAdvertsMapScreen,
  FilterAdvertsScreen,
  AdvertScreen,
} from '../screens';
import {Header} from '../components/Header';
import {HomeIcon} from '../components/svg/icons/Home';
import {withTouchable} from '../HOC';
import {ArrowLeftIcon, FilterIcon} from '../components/svg/icons';

export type SearchAdvertsParamList = {
  [Routes.SEARCH_ADVERTS_LIST_MODE]: undefined;
  [Routes.SEARCH_ADVERTS_MAP_MODE]: undefined;
  [Routes.FILTER_ADVERTS]: undefined;
  [Routes.ADVERT]: {advertId: string};
};

const Stack = createStackNavigator<SearchAdvertsParamList>();
const TouchableHomeIcon = withTouchable(HomeIcon);
const TouchableFilterIcon = withTouchable(FilterIcon);
// const TouchableArrowLeftIcon = withTouchable(ArrowLeft);

export function SearchAdvertsStack() {
  return (
    <Stack.Navigator
      headerMode="screen"
      initialRouteName={Routes.SEARCH_ADVERTS_LIST_MODE}>
      <Stack.Screen
        name={Routes.SEARCH_ADVERTS_LIST_MODE}
        component={SearchAdvertsListScreen}
        options={{
          title: 'Поиск предложений',
          header: ({navigation, ...props}) => (
            <Header
              rightButton={
                <TouchableFilterIcon
                  onPress={() => navigation.navigate(Routes.FILTER_ADVERTS)}
                />
              }
              // leftButton={<TouchableHomeIcon onPress={() => {}} />}
              {...props}
            />
          ),
        }}
      />
      <Stack.Screen
        name={Routes.SEARCH_ADVERTS_MAP_MODE}
        component={SearchAdvertsMapScreen}
        options={{
          title: 'Поиск по карте',
          header: (props) => (
            <Header
              leftButton={
                <ArrowLeftIcon
                  color="white"
                  onPress={() => props.navigation.goBack()}
                />
              }
              {...props}
            />
          ),
        }}
      />
      <Stack.Screen
        name={Routes.FILTER_ADVERTS}
        component={FilterAdvertsScreen}
        options={{
          title: 'Фильтр поиска',
          header: ({navigation, ...props}) => (
            <Header
              leftButton={
                <ArrowLeftIcon
                  color="white"
                  onPress={() => navigation.goBack()}
                />
              }
              {...props}
            />
          ),
        }}
      />
      <Stack.Screen
        name={Routes.ADVERT}
        component={AdvertScreen}
        // initialParams={{
        //   advertId:
        // }}
        options={{
          header: (props) => (
            <Header
              style={{
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                height: props.insets.top,
              }}
              {...props}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
