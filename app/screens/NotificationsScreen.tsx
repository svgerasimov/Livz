import React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import {Screen, Separator} from '../components';
import {SearchIcon, TrashIcon} from '../components/svg/icons';
import {rems} from '../config';
import EStyleSheet from 'react-native-extended-stylesheet';
import Swipeout from 'react-native-swipeout';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';
import { Routes } from '../navigation/routes'
import 'moment/locale/ru';

const ListItem = ({title = '', text = '', Icon = () => null}) => {
  const navigation = useNavigation();
  return (
    <>
      <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => {
        navigation.navigate(Routes.MESSAGES, {
          title,
          text,
          Icon
        })
      }}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 20,
          // paddingRight: 40,
        }}>
        <View style={[styles.iconContainer]}>{Icon}</View>
        <View
          style={{
            marginLeft: 10,
            flex: 1,
          }}>
          <Text
            style={{
              fontSize: 16,
              color: '#171B22',
              marginBottom: 5,
              paddingRight: 10,
            }}>
            {title}
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
            // flex: 1,
            height: 6,
            width: 6,
            borderRadius: 3,
            backgroundColor: '#383F92',
          }}
        />
      </TouchableOpacity>
      <Separator />
    </>
  );
} 

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
  const [notifications, setNotifications] = React.useState([
    {
      title: 'Мы подобрали подходящие объявления для Вас',
      Icon: <SearchIcon width={14} height={14} color="white" />,
      text: 'Мы подобрали подходящие объявления для Вас Мы подобрали подходящие объявления для Вас Мы подобрали подходящие объявления для Вас Мы подобрали подходящие объявления для Вас'
    },
    {
      title: 'Ваше объявление заблокировано',
      Icon: <SearchIcon width={14} height={14} color="white" />,
      text: 'Ваше объявление Таунхаус в Подмосковье 158 кв.м заблокировано администратором по причине некорректного заголовка и описания объекта'
    },
  ]);
  const swipeoutBtns = [{component: <SwipeOutButton />}];
  return (
    <Screen>
      {notifications.map((n, i) => {
        return (
          <Swipeout backgroundColor="white" right={swipeoutBtns}>
            <ListItem key={i} title={n.title} text={n.text} Icon={n.Icon} />
          </Swipeout>
        );
      })}
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
