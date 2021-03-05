import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './routes';
import {NotificationsScreen} from '../screens';
import {Header} from '../components/Header';
import {ArrowLeftIcon} from '../components/svg/icons';

export type ParamList = {
  [Routes.NOTIFICATIONS]: undefined;
};
const Stack = createStackNavigator<ParamList>();

export function NotificationsStack() {
  return (
    <Stack.Navigator
      headerMode="screen"
      initialRouteName={Routes.NOTIFICATIONS}>
      <Stack.Screen
        name={Routes.NOTIFICATIONS}
        component={NotificationsScreen}
        options={{
          title: 'Уведомления (5)',
          header: (props) => (
            <Header
              // leftButton={
              //   <ArrowLeftIcon
              //     color="white"
              //     onPress={() => props.navigation.goBack()}
              //   />
              // }
              {...props}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
