import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Screen, Separator} from '../components';
import {SearchIcon, TrashIcon} from '../components/svg/icons';
import {rems} from '../config';
import EStyleSheet from 'react-native-extended-stylesheet';
import Swipeout from 'react-native-swipeout';
import moment from 'moment';
import 'moment/locale/ru';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ListItem = () => (
  <>
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        paddingRight: 40,
      }}>
      <View style={styles.iconContainer}>
        <SearchIcon width={14} height={14} color="white" />
      </View>
      <View
        style={{
          paddingLeft: 10,
        }}>
        <Text style={{fontSize: 16, color: '#171B22', marginBottom: 5}}>
          Мы подобрали подходящие объявления для Вас
        </Text>
        <Text
          style={{
            color: '#717377',
            fontSize: 12,
          }}>
          {moment().format('LL')}
        </Text>
      </View>
      <View
        style={{
          height: 6,
          width: 6,
          borderRadius: 3,
          backgroundColor: '#383F92',
        }}
      />
    </View>
    <Separator />

    {/* <View style={{
      height: 1,
      backgroundColor: ''
    }} /> */}
  </>
);

const SwipeOutButton = () => (
  <TouchableOpacity
    style={{
      backgroundColor: '#373A3F',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <TrashIcon />
  </TouchableOpacity>
);

export const NotificationsScreen = () => {
  const swipeoutBtns = [{component: <SwipeOutButton />}];
  return (
    <Screen>
      <Swipeout backgroundColor="white" right={swipeoutBtns}>
        <ListItem />
      </Swipeout>
    </Screen>
  );
};

const styles = EStyleSheet.create({
  $iconSize: rems[28],
  iconContainer: {
    width: '$iconSize',
    height: '$iconSize',
    borderRadius: '0.5 * $iconSize',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#353A40',
  },
});
