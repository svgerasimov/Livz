import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './routes';
import {FavoritesScreen} from '../screens';
import {Header} from '../components/Header';
import {ArrowLeftIcon} from '../components/svg/icons';

export type FavoriteAdvertsParamList = {
  [Routes.FAVORITES]: undefined;
};

const Stack = createStackNavigator<FavoriteAdvertsParamList>();

export function FavoriteAdvertsStack() {
  return (
    <Stack.Navigator headerMode="screen" initialRouteName={Routes.FAVORITES}>
      <Stack.Screen
        name={Routes.FAVORITES}
        component={FavoritesScreen}
        options={{
          title: 'Избранные',
          header: (props) => (
            <Header
              leftButton={<ArrowLeftIcon onPress={() => {}} />}
              {...props}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
