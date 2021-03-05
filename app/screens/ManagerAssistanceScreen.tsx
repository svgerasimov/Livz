import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {NewAdParamList} from '../navigation/NewAdStack';
import {Routes} from '../navigation/routes';
import {Button, Screen, Row} from '../components';
import {rems, Colors} from '../config';

type ScreenNavigationProp = StackNavigationProp<
  NewAdParamList,
  Routes.MANAGER_ASSISTANCE
>;
type ScreenRouteProp = RouteProp<NewAdParamList, Routes.MANAGER_ASSISTANCE>;

interface ScreenProps {
  navigation: ScreenNavigationProp;
  route: ScreenRouteProp;
}

export const ManagerAssistanceScreen: React.FC<ScreenProps> = ({
  navigation,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  return (
    <Screen style={styles.screen}>
      <Row style={[styles.row]}>
        <Row style={[styles.row, {width: '100%'}]}>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              value={name}
              onChangeText={(value) => setName(value)}
              placeholder="Ваше имя"
              textAlign="left"
            />
          </View>
        </Row>
        <Row style={[styles.row, {width: '100%'}]}>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              keyboardType="numeric"
              value={phone}
              maxLength={10}
              onChangeText={(value) => setPhone(value)}
              placeholder="Введите свое номер телефона"
              textAlign="left"
            />
          </View>
        </Row>

        <Row style={[styles.row, {marginTop: 26}]}>
          <Button
            buttonStyle={{width: 275}}
            title="Оставить заявку"
            onPress={() => {
              setName('');
              setPhone('');
            }}
          />
        </Row>
      </Row>
    </Screen>
  );
};

const styles = EStyleSheet.create({
  row: {
    alignItems: 'center',
    marginTop: rems[20],
  },
  title: {
    fontSize: rems[19],
    fontWeight: '400',
  },
  screen: {
    padding: rems[20],
  },
  textInput: {
    height: 'auto',
    // width: '100%',
    fontSize: rems[16],
    paddingVertical: 10,
  },
  textInputContainer: {
    width: '100%',
    borderColor: Colors.inputFieldBorderColor,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: 'black',
  },
});
