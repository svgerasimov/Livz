import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {AuthStackParamList} from '../navigation/AuthNavigator';
import {Routes} from '../navigation/routes';
import {
  Button,
  AuthHeader,
  Screen,
  InputField,
  Row,
  Social,
} from '../components';
import {AppleIcon} from '../components/svg/icons';
import {size, globalStyles, rems} from '../config';
import {Formik, FormikHelpers, Field} from 'formik';
import EStyleSheet from 'react-native-extended-stylesheet';
import {ArrowLeftIcon} from '../components/svg/icons';
import {
  VkIcon,
  GoogleIcon,
  FacebookIcon,
  OdnoklassnikiIcon,
  MailIcon,
  DotsIcon,
} from '../components/svg/icons';

import * as yup from 'yup';

const validationSchema = yup.object().shape({
  emailOrPhone: yup.string().required('Необходимо ввести номер или e-mail'),
});

type ScreenNavigationProp = StackNavigationProp<
  AuthStackParamList,
  Routes.RESTORE_ACCESS_COMPLETE
>;
type ScreenRouteProp = RouteProp<
  AuthStackParamList,
  Routes.RESTORE_ACCESS_COMPLETE
>;

interface ScreenProps {
  route: ScreenRouteProp;
  navigation: ScreenNavigationProp;
}

export const RestoreAccessCompleteScreen: React.FC<ScreenProps> = ({
  navigation,
}) => {
  return (
    <Screen style={styles.screen} Header={<AuthHeader />}>
      <View style={{alignItems: 'center'}}>
        <Row style={styles.textContainer}>
          <Text style={styles.text}>
            Мы отправили Вам письмо с инструкциями для восстановления доступа
          </Text>
        </Row>

        <Button
          buttonStyle={{width: '100%'}}
          type="outline"
          color="smoke"
          title="Назад"
          onPress={() => navigation.navigate(Routes.LOGIN)}
        />
      </View>
    </Screen>
  );
};
const styles = EStyleSheet.create({
  screen: {padding: rems[50]},
  textContainer: {
    marginVertical: rems[40],
  },
  text: {
    color: '#4E5054',
    fontSize: rems[17],
    textAlign: 'center',
    lineHeight: rems[27],
  },
});
