import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Screen, Separator} from '../components';
import {SearchIcon, TrashIcon} from '../components/svg/icons';
import {rems} from '../config';
import EStyleSheet from 'react-native-extended-stylesheet';
import Swipeout from 'react-native-swipeout';
import moment from 'moment';
import 'moment/locale/ru';


export const MessagesScreen = ({route}) => {
    const { title, text, Icon } = route.params;
  return (
    <Screen style={styles.screen}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        //   padding: 20,
        marginBottom: 12
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
      </View>
      <Text style={{fontSize: 14, lineHeight: 23, color: '#292A2D'}}>
          {text}
      </Text>

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
  screen: {
    padding: rems[20],
  },
});
