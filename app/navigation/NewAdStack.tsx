import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './routes';
import {
  NewAdScreen,
  HowToAddAdvertScreen,
  WhoAddAdvertScreen,
  ManagerAssistanceScreen,
} from '../screens';
import {Header} from '../components/Header';
import {ArrowLeftIcon} from '../components/svg/icons';

export type NewAdParamList = {
  [Routes.HOWTOADDADVERT]: undefined;
  [Routes.WHOADDADVERT]: undefined;
  [Routes.NEWAD]: undefined;
  [Routes.MANAGER_ASSISTANCE]: undefined;
};

const Stack = createStackNavigator<NewAdParamList>();

export function NewAdStack() {
  return (
    <Stack.Navigator headerMode="screen" initialRouteName={Routes.WHOADDADVERT}>
      <Stack.Screen
        name={Routes.WHOADDADVERT}
        component={WhoAddAdvertScreen}
        options={{
          title: 'Добавление объекта',
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
        name={Routes.HOWTOADDADVERT}
        component={HowToAddAdvertScreen}
        options={{
          title: 'Добавление объекта',
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
        name={Routes.MANAGER_ASSISTANCE}
        component={ManagerAssistanceScreen}
        options={{
          title: 'Помощь менеджера',
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
        name={Routes.NEWAD}
        component={NewAdScreen}
        options={{
          title: 'Добавление объекта',
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
    </Stack.Navigator>
  );
}
