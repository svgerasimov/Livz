import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {NewAdParamList} from '../navigation/NewAdStack';
import {Routes} from '../navigation/routes';
import {Button, Screen, Row, ButtonGroup} from '../components';
import {rems} from '../config';

type ScreenNavigationProp = StackNavigationProp<
  NewAdParamList,
  Routes.WHOADDADVERT
>;
type ScreenRouteProp = RouteProp<NewAdParamList, Routes.WHOADDADVERT>;

interface ScreenProps {
  navigation: ScreenNavigationProp;
  route: ScreenRouteProp;
}

const roles = ['Агент', 'Собственник'] as const;

export const WhoAddAdvertScreen: React.FC<ScreenProps> = ({navigation}) => {
  const [role, setRole] = useState<typeof roles[number]>(roles[0]);
  const [roleIndex, setRoleIndex] = useState(0);

  return (
    <Screen style={styles.screen}>
      <Row style={[styles.row]}>
        <Text style={[styles.title, {marginBottom: 24}]}>
          Укажите кем Вы являетесь:
        </Text>
        <ButtonGroup
          containerStyle={{borderRadius: 6, marginTop: 8}}
          buttons={[...roles]}
          onPress={(selectedIndex) => {
            setRoleIndex(selectedIndex);
            setRole(roles[selectedIndex]);
          }}
          selectedIndex={roleIndex}
        />
      </Row>
      <Row style={[styles.row]}>
        <Button
          buttonStyle={{}}
          title="Далее"
          onPress={() => navigation.navigate(Routes.HOWTOADDADVERT)}
        />
      </Row>
    </Screen>
  );
};

const styles = EStyleSheet.create({
  row: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: rems[19],
    fontWeight: '400',
  },
  screen: {
    padding: rems[20],
  },
});
