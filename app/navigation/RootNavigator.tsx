import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthNavigator} from '../navigation/AuthNavigator';
import {AppNavigator} from '../navigation/AppNavigator';
import {useTypedSelector} from '../hooks';

export const RootNavigator = () => {
  const token = useTypedSelector((state) => state.auth.token);
  return (
    <NavigationContainer>
      {token ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
