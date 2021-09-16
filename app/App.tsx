import React from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {Provider} from 'react-redux';
import {store} from './state';
import EStyleSheet from 'react-native-extended-stylesheet';
import {rem} from './config';
import {MenuProvider} from 'react-native-popup-menu';
import {RootNavigator} from './navigation/RootNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
// import {GoogleSignin} from '@react-native-google-signin/google-signin';

// GoogleSignin.configure({
//   webClientId: '',
// });

EStyleSheet.build({
  $rem: rem,
  $greenColor: '#78BA54',
  $blackColor: '#171B22',
  $whiteColor: '#fff',
  $grayColor: '#848484',
  $lightGrayColor: '#DADADA',
  $darkGreyColor: '#47484B',
  $transparentColor: 'rgba(0, 0, 0, 0)',
  $whitesmokeColor: '#EFF2F5',
  $darkslategrayColor: '#353A40',
  $lightdarkslategrayColor: '#525252',
  $errorColor: 'red',
  $inactiveTabbarIconColor: '#3F4247',
  $activeTabbarIconColor: '#65AB3E',
});

const App = () => {
  React.useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <MenuProvider>
          <RootNavigator />
        </MenuProvider>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
