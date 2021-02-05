import React from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';

import {Routes} from './navigation/routes';
import {AuthNavigator} from './navigation/AuthNavigator';

const App = () => {
  React.useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);

  React.useEffect(() => {
    console.log(Routes.WELCOME);
  }, []);
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default App;
