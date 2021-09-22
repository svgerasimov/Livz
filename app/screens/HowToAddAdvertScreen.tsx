import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {NewAdParamList} from '../navigation/NewAdStack';
import {Routes} from '../navigation/routes';
import {Button, Screen, Row} from '../components';
import {rems} from '../config';

type HowToAddAdvertScreenNavigationProp = StackNavigationProp<
  NewAdParamList,
  Routes.HOWTOADDADVERT
>;
type HowToAddAdvertScreenRouteProp = RouteProp<
  NewAdParamList,
  Routes.HOWTOADDADVERT
>;

interface FilterAdvertsScreenProps {
  navigation: HowToAddAdvertScreenNavigationProp;
  route: HowToAddAdvertScreenRouteProp;
}

export const HowToAddAdvertScreen: React.FC<FilterAdvertsScreenProps> = ({
  navigation,
}) => {
  return (
    <Screen style={styles.screen}>
      <Row style={[styles.row]}>
        <Text style={[styles.title, {marginBottom: 24}]}>
          Добавить объект:{' '}
        </Text>
        <Button
          color="undefined"
          buttonStyle={{
            width: '100%',
            marginBottom: 15,
            backgroundColor: '#65AB3E',
            borderColor: 'transparent',
          }}
          title="Добавить самостоятельно"
          onPress={() => navigation.navigate(Routes.NEWAD)}
        />
        <Button
          type="outline"
          color="smoke"
          buttonStyle={{width: '100%', borderColor: '#DADADA'}}
          title="Мне нужна помощь менеджера"
          onPress={() => navigation.navigate(Routes.MANAGER_ASSISTANCE)}
        />
      </Row>
    </Screen>
  );
};

const styles = EStyleSheet.create({
  row: {
    alignItems: 'center',
  },
  title: {
    fontSize: rems[19],
    fontWeight: '400',
  },
  screen: {
    padding: rems[20],
  },
});
