import React from 'react';
import {View, Alert, Text, StyleSheet} from 'react-native';

import {Button, Screen, AuthHeader} from '../components';
import {Colors, size} from '../config';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {AuthStackParamList} from '../navigation/AuthNavigator';
import {Routes} from '../navigation/routes';
import {useActions} from '../hooks';

type WelcomeScreenNavigationProp = StackNavigationProp<
  AuthStackParamList,
  Routes.WELCOME
>;
type WelcomeScreenRouteProp = RouteProp<AuthStackParamList, Routes.WELCOME>;

interface WelcomeScreenProps {
  navigation: WelcomeScreenNavigationProp;
  route: WelcomeScreenRouteProp;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  navigation,
  route,
}) => {
  const {login} = useActions();
  return (
    <Screen Header={<AuthHeader />} style={styles.screen}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Добро пожаловать</Text>
        <Text style={styles.subtitle}>
          если Вы здесь впервые предлагаем зарегистрироваться
        </Text>
      </View>
      <Button
        color="dark"
        onPress={() => navigation.navigate(Routes.REGISTER)}
        title="Зарегестрироваться"
      />
      <Text style={[styles.subtitle, {marginVertical: 24}]}>
        Если у вас уже есть аккаунт:
      </Text>
      <Button
        color="smoke"
        type="outline"
        onPress={() => navigation.navigate(Routes.LOGIN)}
        title="Войти в аккаунт"
      />
      <Button
        type="clear"
        onPress={login}
        title="Войти без регистрации"
        titleStyle={styles.clearButtonTitle}
        buttonStyle={styles.clearButton}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 36,
  },
  textContainer: {
    marginBottom: 24,
  },
  title: {
    fontSize: size.title,
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: size.subTitle,
    color: Colors.subTitle,
    textAlign: 'center',
  },
  clearButton: {
    marginTop: 20,
  },
  clearButtonTitle: {
    textDecorationLine: 'underline',
  },
});
