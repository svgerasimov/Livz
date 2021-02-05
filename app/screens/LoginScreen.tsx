import React, {useRef} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  TextInput,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {AuthStackParamList} from '../navigation/AuthNavigator';
import {Routes} from '../navigation/routes';
import {Button, AuthHeader, Screen, InputField} from '../components';
import {ArrowLeft, AppleIcon} from '../components/svg/icons';
import {Fonts, Styles} from '../config';
import {Formik, FormikHelpers, Field} from 'formik';

import * as yup from 'yup';

const loginValidationSchema = yup.object().shape({
  emailOrPhone: yup
    .string()
    .required('Email Address or Phone number is Required'),
  password: yup
    .string()
    .min(5, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});

type LoginScreenNavigationProp = StackNavigationProp<
  AuthStackParamList,
  Routes.LOGIN
>;
type LoginScreenRouteProp = RouteProp<AuthStackParamList, Routes.LOGIN>;

interface LoginScreenProps {
  route: LoginScreenRouteProp;
}

interface FormValues {
  emailOrPhone: string;
  password: string;
}

const initialValues: FormValues = {
  emailOrPhone: '',
  password: '',
};

export const LoginScreen: React.FC<LoginScreenProps> = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();

  return (
    <Screen style={{padding: 20}} Header={<AuthHeader />}>
      <View
        style={{
          flex: 1,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            style={{marginRight: 21}}
            activeOpacity={0.6}
            onPress={() => navigation.goBack()}>
            <ArrowLeft />
          </TouchableOpacity>
          <Text style={Styles.title}>Вход в аккаунт</Text>
        </View>

        <Formik
          initialValues={initialValues}
          validationSchema={loginValidationSchema}
          onSubmit={(
            values: FormValues,
            {resetForm, setSubmitting}: FormikHelpers<FormValues>,
          ) => {
            setSubmitting(true);

            setTimeout(() => {
              // console.log(values);
              setSubmitting(false);
              navigation.navigate(Routes.REGISTER);
              resetForm({values: initialValues});
            }, 2000);
          }}>
          {({handleSubmit, isValid, isSubmitting}) => {
            return (
              <>
                <View style={styles.form}>
                  <Field
                    autofocus
                    name="emailOrPhone"
                    style={styles.input}
                    inputStyle={styles.input}
                    inputContainerStyle={styles.inputContainer}
                    component={InputField}
                    placeholder="Ваш email или телефон"
                  />
                  <Field
                    name="password"
                    style={styles.input}
                    inputContainerStyle={styles.inputContainer}
                    component={InputField}
                    placeholder="mypassword123"
                    inputStyle={styles.input}
                    secureTextEntry
                  />
                </View>
                <View style={styles.btnContainer}>
                  <Button
                    loading={isSubmitting}
                    disabled={isSubmitting || !isValid}
                    color="green"
                    onPress={handleSubmit}
                    title="Войти"
                  />
                  <Button
                    buttonStyle={{marginVertical: 13}}
                    color="smoke"
                    onPress={() => {}}
                    title="Восстановить пароль"
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

        <Text style={[Styles.text, {marginVertical: 20, alignSelf: 'center'}]}>
          или
        </Text>
        <Text
          style={[
            Styles.text,
            {
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: Fonts.size.small,
            },
          ]}>
          Продолжая, вы подтверждаете согласие с нашей политикой
          конфиденциальности и правилами использования
        </Text>
      </View>
    </Screen>
  );
};
const styles = StyleSheet.create({
  form: {
    marginVertical: 14,
  },
  btnContainer: {
    alignItems: 'center',
  },
  input: {
    fontSize: Fonts.size.regular,
    color: '#B4B6BB',
  },
  inputContainer: {
    marginHorizontal: -10,
  },
});
