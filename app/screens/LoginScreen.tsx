import React from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import {Input} from 'react-native-elements';
import {Button, AuthHeader, Screen} from '../components';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {AuthStackParamList} from '../navigation/AuthNavigator';

import {Routes} from '../navigation/routes';
import {ArrowLeft} from '../components/svg/icons/ArrowLeft';
import {Styles} from '../config';

type LoginScreenNavigationProp = StackNavigationProp<
  AuthStackParamList,
  Routes.LOGIN
>;
type LoginScreenRouteProp = RouteProp<AuthStackParamList, Routes.LOGIN>;

interface LoginScreenProps {
  route: LoginScreenRouteProp;
}

export const LoginScreen: React.FC<LoginScreenProps> = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [text, setText] = React.useState('');

  return (
    <Screen style={{padding: 20}} Header={<AuthHeader />}>
      <View
        style={{
          flex: 1,
          borderWidth: 1,
          borderColor: '#ccc',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            style={{marginRight: 21}}
            activeOpacity={0.6}
            onPress={() => navigation.goBack()}>
            <ArrowLeft />
          </TouchableOpacity>
          <Text style={Styles.title}>Вход в аккаунт</Text>
        </View>
        <View style={{marginVertical: 10}}>
          <Input
            value={text}
            placeholder="Ваш email или телефон"
            containerStyle={{}}
            inputContainerStyle={{
              marginHorizontal: -10,
            }}
            inputStyle={{}}
            onChangeText={(value) => setText(value)}
          />
          <Input
            value={text}
            placeholder="mypassword123"
            containerStyle={{}}
            inputContainerStyle={{
              marginHorizontal: -10,
            }}
            inputStyle={{}}
            onChangeText={(value) => setText(value)}
          />
        </View>
        <Button color="green" onPress={() => {}} title="Войти" />
        <Button color="smoke" onPress={() => {}} title="Восстановить пароль" />

        {/* <Button title="Press me" color="dark" onPress={() => {}} /> */}
      </View>
    </Screen>
  );
};
