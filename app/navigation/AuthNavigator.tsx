import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import {
  WelcomeScreen,
  LoginScreen,
  RegisterScreen,
  SuccessfulRegistrationScreen,
  CompleteRegistrationScreen,
  PhoneNumberConfirmationScreen,
  RestoreScreen,
  RestoreAccessCompleteScreen,
} from '../screens';
import {Routes} from '../navigation/routes';

export type AuthStackParamList = {
  [Routes.WELCOME]: undefined;
  [Routes.LOGIN]: undefined;
  [Routes.REGISTER]: undefined;
  [Routes.COMPLETE_REGISTRATION]: undefined;
  [Routes.SUCCESSFUL_REGISTRATION]: undefined;
  [Routes.PHONE_NUMBER_CONFIRMATION]: undefined;
  [Routes.RESTORE_ACCESS]: undefined;
  [Routes.RESTORE_ACCESS_COMPLETE]: undefined;
};

const AuthStack = createStackNavigator<AuthStackParamList>();

const navigatorOptions: StackNavigationOptions = {
  headerShown: false,
};

export const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      initialRouteName={Routes.WELCOME}
      screenOptions={navigatorOptions}>
      <AuthStack.Screen name={Routes.WELCOME} component={WelcomeScreen} />
      <AuthStack.Screen name={Routes.LOGIN} component={LoginScreen} />
      <AuthStack.Screen name={Routes.REGISTER} component={RegisterScreen} />
      <AuthStack.Screen
        name={Routes.SUCCESSFUL_REGISTRATION}
        component={SuccessfulRegistrationScreen}
      />
      <AuthStack.Screen
        name={Routes.COMPLETE_REGISTRATION}
        component={CompleteRegistrationScreen}
      />
      <AuthStack.Screen
        name={Routes.PHONE_NUMBER_CONFIRMATION}
        component={PhoneNumberConfirmationScreen}
      />
      <AuthStack.Screen
        name={Routes.RESTORE_ACCESS}
        component={RestoreScreen}
      />
      <AuthStack.Screen
        name={Routes.RESTORE_ACCESS_COMPLETE}
        component={RestoreAccessCompleteScreen}
      />
    </AuthStack.Navigator>
  );
};
