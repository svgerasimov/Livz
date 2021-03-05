import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {
  FavoritesScreen,
  NewAdScreen,
  NotificationsScreen,
  ProfileScreen,
} from '../screens';
import EStyleSheet from 'react-native-extended-stylesheet';
import {SearchIcon} from '../components/svg/icons/Search';
import {NotificationIcon} from '../components/svg/icons/Notification';
import {HeartIcon} from '../components/svg/icons';
import {AddIcon} from '../components/svg/icons/Add';
import {MenuIcon} from '../components/svg/icons';
// import {ProfileIcon} from '../components/svg/icons/Profile';
import {SearchAdvertsStack} from './SearchAdvertsStack';
import {FavoriteAdvertsStack} from './FavoriteAdvertsStack';
import {NotificationsStack} from './NotificationsStack';
import {NewAdStack} from './NewAdStack';
import {ProfileStack} from './ProfileStack';
import {withTouchable} from '../HOC';

import {Routes} from './routes';
import {Colors} from '../config';

const TouchableHeartIcon = withTouchable(HeartIcon);

const Tab = createMaterialBottomTabNavigator();

export const AppNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={Routes.PROFILE}
      activeColor={Colors.activeTabbarIconColor}
      labeled={false}
      inactiveColor={Colors.inactiveTabbarIconColor}
      barStyle={styles.barStyle}>
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => {
            return <SearchIcon color={color} />;
          },
        }}
        name={Routes.SEARCH}
        component={SearchAdvertsStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => {
            return <NotificationIcon color={color} />;
          },
        }}
        name={Routes.NOTIFICATIONS}
        component={NotificationsStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => {
            return <AddIcon color={color} />;
          },
        }}
        name={Routes.NEWAD}
        component={NewAdStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => {
            return <TouchableHeartIcon width={22} height={19} color={color} />;
          },
        }}
        name={Routes.FAVORITES}
        component={FavoriteAdvertsStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => {
            return <MenuIcon color={color} />;
          },
        }}
        name={Routes.PROFILE}
        component={ProfileStack}
      />
    </Tab.Navigator>
  );
};

const styles = EStyleSheet.create({
  barStyle: {
    backgroundColor: Colors.white,
    height: '3.57rem',
    // justifyContent: 'center',
  },
});
