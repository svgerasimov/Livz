import React from 'react';
import {Text} from 'react-native';
import {Screen, AuthHeader} from '../components';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {AuthStackParamList} from '../navigation/AuthNavigator';
import {Routes} from '../navigation/routes';

type RegisterScreenNavigationProp = StackNavigationProp<
  AuthStackParamList,
  Routes.LOGIN
>;
type RegisterScreenRouteProp = RouteProp<AuthStackParamList, Routes.LOGIN>;

interface RegisterScreenProps {
  navigation: RegisterScreenNavigationProp;
  route: RegisterScreenRouteProp;
}

export const RegisterScreen: React.FC<RegisterScreenProps> = ({navigation}) => {
  return (
    <Screen
      Header={<AuthHeader />}
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>RegisterScreen</Text>
    </Screen>
  );
};
