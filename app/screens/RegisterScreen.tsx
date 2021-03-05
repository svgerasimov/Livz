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
  phone: yup.string().required('Необходимо ввести номер'),
});

type ScreenNavigationProp = StackNavigationProp<
  AuthStackParamList,
  Routes.REGISTER
>;
type ScreenRouteProp = RouteProp<AuthStackParamList, Routes.REGISTER>;

interface ScreenProps {
  navigation: ScreenNavigationProp;
  route: ScreenRouteProp;
}

interface FormValues {
  phone: string;
}

const initialValues: FormValues = {
  phone: '',
};

export const RegisterScreen: React.FC<ScreenProps> = () => {
  const navigation = useNavigation<ScreenNavigationProp>();

  return (
    <Screen style={styles.screen} Header={<AuthHeader />}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <ArrowLeftIcon onPress={() => navigation.goBack()} />
        <Text style={[globalStyles.title, {marginLeft: 20}]}>Регистрация</Text>
      </View>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(
          values: FormValues,
          {resetForm, setSubmitting}: FormikHelpers<FormValues>,
        ) => {
          console.log(values);
          navigation.navigate(Routes.PHONE_NUMBER_CONFIRMATION);
          setTimeout(() => {
            resetForm({values: initialValues});
          }, 500);
          // setTimeout(() => {
          //   console.log(values);
          //   setSubmitting(false);
          //   navigation.navigate(Routes.COMPLETE_REGISTRATION);
          //   resetForm({values: initialValues});
          // }, 1000);
        }}>
        {({handleSubmit, isValid, isSubmitting}) => {
          return (
            <>
              <View style={styles.form}>
                <Field
                  autofocus
                  name="phone"
                  style={styles.input}
                  inputStyle={styles.input}
                  inputContainerStyle={styles.inputContainer}
                  component={InputField}
                  placeholder="Введите свой номер телефона"
                />
              </View>
              <View style={styles.btnContainer}>
                <Button
                  buttonStyle={{marginBottom: 12}}
                  loading={isSubmitting}
                  disabled={isSubmitting || !isValid}
                  color="green"
                  onPress={handleSubmit}
                  title="Зарегестрироваться"
                />
                <Button
                  leftIcon={<AppleIcon />}
                  color="dark"
                  onPress={() => {}}
                  title="Войти с Apple ID"
                />
              </View>
            </>
          );
        }}
      </Formik>

      <Text
        style={[globalStyles.text, {marginVertical: 20, alignSelf: 'center'}]}>
        или
      </Text>

      <Row style={styles.row}>
        <View style={styles.iconContainer}>
          <Social
            containerStyle={styles.social}
            onPress={() => {}}
            color="#5181B8"
            Icon={VkIcon}
          />
          <Social
            containerStyle={styles.social}
            onPress={() => {}}
            color="#EA4335"
            Icon={GoogleIcon}
          />
          <Social
            containerStyle={styles.social}
            onPress={() => {}}
            color="#4867AA"
            Icon={FacebookIcon}
          />
          <Social
            containerStyle={styles.social}
            onPress={() => {}}
            color="#FF9800"
            Icon={OdnoklassnikiIcon}
          />
          <Social
            containerStyle={styles.social}
            onPress={() => {}}
            color="#005FF9"
            Icon={MailIcon}
          />
          <Social onPress={() => {}} color="#E4E7EC" Icon={DotsIcon} />
        </View>
      </Row>

      <Text
        style={[
          globalStyles.text,
          {
            alignSelf: 'center',
            textAlign: 'center',
            fontSize: size.small,
            lineHeight: 15.5,
          },
        ]}>
        Продолжая, вы подтверждаете согласие с нашей политикой
        конфиденциальности и правилами использования
      </Text>
    </Screen>
  );
};
const styles = EStyleSheet.create({
  screen: {padding: rems[20]},
  form: {
    marginVertical: 14,
  },
  btnContainer: {
    alignItems: 'center',
  },
  input: {
    fontSize: size.regular,
    color: '#B4B6BB',
  },
  inputContainer: {
    marginHorizontal: -10,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  row: {
    marginBottom: rems[20],
  },
  social: {
    marginRight: 10,
  },
});
