import React from 'react';
import {Text, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {AuthStackParamList} from '../navigation/AuthNavigator';
import {Routes} from '../navigation/routes';
import {Button, AuthHeader, Screen, Row} from '../components';
import {size, globalStyles, rems} from '../config';
import {useActions} from '../hooks';

import EStyleSheet from 'react-native-extended-stylesheet';

type ScreenNavigationProp = StackNavigationProp<
  AuthStackParamList,
  Routes.SUCCESSFUL_REGISTRATION
>;
type ScreenRouteProp = RouteProp<
  AuthStackParamList,
  Routes.SUCCESSFUL_REGISTRATION
>;

interface ScreenProps {
  navigation: ScreenNavigationProp;
  route: ScreenRouteProp;
}

export const SuccessfulRegistrationScreen: React.FC<ScreenProps> = ({
  navigation,
}) => {
  const {login} = useActions();
  return (
    <Screen style={styles.screen} Header={<AuthHeader />}>
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Row style={styles.row}>
          <Text style={[globalStyles.title, {fontSize: 27}]}>
            Регистрация прошла успешно
          </Text>
        </Row>
        <Row style={styles.row}>
          <Button color="dark" title="Продолжить" onPress={() => login()} />
        </Row>
      </View>
    </Screen>
  );
};
const styles = EStyleSheet.create({
  screen: {padding: rems[20]},
  row: {
    marginBottom: rems[20],
  },
});
