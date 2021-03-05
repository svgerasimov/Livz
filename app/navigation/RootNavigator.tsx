import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthNavigator} from '../navigation/AuthNavigator';
import {AppNavigator} from '../navigation/AppNavigator';
import {useTypedSelector} from '../hooks';

export const RootNavigator = () => {
  const auth = useTypedSelector((state) => state.auth.auth);
  return (
    <NavigationContainer>
      {auth ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
