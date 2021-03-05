import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './routes';
import {ProfileScreen, FeedScreen} from '../screens';
import {Header} from '../components/Header';
import {ArrowLeftIcon, HomeIcon, ProfileIcon} from '../components/svg/icons';
import {withTouchable} from '../HOC';

export type ProfileParamList = {
  [Routes.FEED]: undefined;
  [Routes.PROFILE]: undefined;
};
const Stack = createStackNavigator<ProfileParamList>();
const TouchableHomeIcon = withTouchable(HomeIcon);

const PersonalAccount = ({onPress = () => {}}) => {
  return (
    <TouchableOpacity
      style={{
        borderRadius: 50,
        backgroundColor: 'white',
        height: 30,
        width: 125,
      }}
      onPress={onPress}
      activeOpacity={0.94}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          paddingLeft: 9,
          //   justifyContent: 'space-between',
        }}>
        <ProfileIcon />
        <Text
          style={{
            color: '#5E6062',
            textTransform: 'uppercase',
            fontSize: 10,
            paddingLeft: 10,
          }}>
          мой кабинет
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export function ProfileStack() {
  return (
    <Stack.Navigator headerMode="screen" initialRouteName={Routes.FEED}>
      <Stack.Screen
        name={Routes.FEED}
        component={FeedScreen}
        options={{
          title: 'Лента',
          header: (props) => (
            <Header
              //   leftButton={
              //     <TouchableHomeIcon color="white" onPress={() => {}} />
              //   }
              rightButton={
                <PersonalAccount
                  onPress={() => props.navigation.navigate(Routes.PROFILE)}
                />
              }
              {...props}
            />
          ),
        }}
      />
      <Stack.Screen
        name={Routes.PROFILE}
        component={ProfileScreen}
        options={{
          title: 'Мой профиль',
          header: (props) => (
            <Header
              //   leftButton={
              //     <TouchableHomeIcon color="white" onPress={() => {}} />
              //   }

              {...props}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
