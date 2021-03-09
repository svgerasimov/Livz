import React from 'react';
import {StyleSheet, Text, View, Dimensions, ScrollView} from 'react-native';
import {Screen} from '../components';
import EStyleSheet from 'react-native-extended-stylesheet';
import {rems} from '../config';
import {
  UserIcon,
  CircleIcon,
  RingIcon,
  QuestionIcon,
} from '../components/svg/icons';

import {TouchableOpacity} from 'react-native-gesture-handler';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {ProfileParamList} from '../navigation/ProfileStack';
import {Routes} from '../navigation/routes';


type ScreenNavigationProp = StackNavigationProp<
  ProfileParamList,
  Routes.ABOUT_APP
>;
type ScreenRouteProp = RouteProp<ProfileParamList, Routes.ABOUT_APP>;

interface AboutAppScreenProps {
  navigation: ScreenNavigationProp;
  route: ScreenRouteProp;
}

export const AboutAppScreen: React.FC<AboutAppScreenProps> = ({navigation}) => {
  return (
    <Screen style={styles.screen}>
      <View
        style={{
          width: '100%',
          borderRadius: 19,
          borderWidth: 1,
          borderColor: '#E7EAF0',
          marginBottom: 25,
        }}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => navigation.navigate(Routes.LICENSE_AGREEMENT)}
          style={{
            borderBottomWidth: 1,
            borderColor: '#E7EAF0',
            // height: 55,
            flexDirection: 'row',
            alignItems: 'center',
            padding: 20,
          }}>
          <Text style={{fontSize: 15, color: '#4F5154'}}>
            Лицензионное соглашение
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {}}
          style={{
            borderBottomWidth: 1,
            borderColor: '#E7EAF0',
            // height: 55,
            flexDirection: 'row',
            alignItems: 'center',
            padding: 20,
            // backgroundColor: '#F4F7FB',
          }}>
          <Text style={{fontSize: 15, color: '#4F5154'}}>
            Сайт разработчика
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {}}
          style={{
            // borderBottomWidth: 1,
            // borderColor: '#E7EAF0',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 20,
          }}>
          <Text style={{fontSize: 15, color: '#4F5154'}}>Версия</Text>
          <Text style={{color: '#A1A1A1', fontSize: 14}}>1.001</Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
};

const styles = EStyleSheet.create({
  screen: {
    padding: rems[20],
  },
  tabbarTitle: {
    fontSize: rems[16],
  },
  activeTabbarTitle: {
    color: 'black',
  },
  inActiveTabbarTitle: {
    color: '#979BA2',
  },
});
