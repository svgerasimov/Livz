import React from 'react';
import {StyleSheet, Text, View, Dimensions, ScrollView} from 'react-native';
import {Screen, Row} from '../components';
import EStyleSheet from 'react-native-extended-stylesheet';
import {rems} from '../config';
import {
  UserIcon,
  CircleIcon,
  RingIcon,
  QuestionIcon,
} from '../components/svg/icons';

import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {ProfileParamList} from '../navigation/ProfileStack';
import {Routes} from '../navigation/routes';

type ScreenNavigationProp = StackNavigationProp<
  ProfileParamList,
  Routes.LICENSE_AGREEMENT
>;
type ScreenRouteProp = RouteProp<ProfileParamList, Routes.LICENSE_AGREEMENT>;

interface LicenseScreenProps {
  navigation: ScreenNavigationProp;
  route: ScreenRouteProp;
}

export const LicenseAgreementScreen: React.FC<LicenseScreenProps> = ({
  navigation,
}) => {
  return (
    <Screen style={styles.screen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        alwaysBounceVertical={false}>
        <Row style={styles.row}>
          <Text style={styles.title}>Общие положения</Text>
          <Text style={styles.content}>
            Равным образом реализация намеченных плановых заданий способствует
            подготовки и реализации позиций, занимаемых участниками в отношении
            поставленных задач. Разнообразный и богатый опыт сложившаяся
            структура организации позволяет выполнять важные задания по
            разработке направлений прогрессивного развития.
          </Text>
        </Row>
        <Row style={styles.row}>
          <Text style={styles.title}>Права пользователей</Text>
          <Text style={styles.content}>
            Равным образом реализация намеченных плановых заданий способствует
            подготовки и реализации позиций, занимаемых участниками в отношении
            поставленных задач. Разнообразный и богатый опыт сложившаяся
            структура организации позволяет выполнять важные задания по
            разработке направлений прогрессивного развития.
          </Text>
        </Row>
        <Row style={styles.row}>
          <Text style={styles.title}>Администрация имеет право</Text>
          <Text style={styles.content}>
            Равным образом реализация намеченных плановых заданий способствует
            подготовки и реализации позиций, занимаемых участниками в отношении
            поставленных задач. Разнообразный и богатый опыт сложившаяся
            структура организации позволяет выполнять важные задания по
            разработке направлений прогрессивного развития.
          </Text>
        </Row>
      </ScrollView>
    </Screen>
  );
};

const styles = EStyleSheet.create({
  screen: {
    padding: rems[20],
  },
  row: {
    marginBottom: rems[20],
  },
  title: {
    color: 'black',
    fontSize: rems[19],
    lineHeight: rems[27],
    marginBottom: rems[12],
  },
  content: {
    color: '#383838',
    fontSize: rems[14],
    lineHeight: rems[24],
  },
});
