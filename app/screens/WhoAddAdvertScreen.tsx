import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {NewAdParamList} from '../navigation/NewAdStack';
import {Routes} from '../navigation/routes';
import {Button, Screen, Row, ButtonGroup} from '../components';
import {rems} from '../config';
import {useDispatch, useSelector} from 'react-redux';
import {UpdateAccountType} from '../state/action-creators/advertsActionCreators';
import {useActions} from '../hooks';

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
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const {login} = useActions();
  const [roleIndex, setRoleIndex] = useState();

  useEffect(() => {
    if (token === 'unauthorized') {
      login(undefined, true);
    }
  }, []);

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
            dispatch(UpdateAccountType(roles[selectedIndex]));
            navigation.navigate(Routes.HOWTOADDADVERT);
          }}
          selectedIndex={roleIndex}
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
