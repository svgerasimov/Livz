import React, {useRef} from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {ProfileParamList} from '../navigation/ProfileStack';
import {Routes} from '../navigation/routes';
import {Button, AuthHeader, Screen, InputField} from '../components';
import {ArrowLeftIcon} from '../components/svg/icons';
import {size, globalStyles} from '../config';
import {Formik, FormikHelpers, Field} from 'formik';

import * as yup from 'yup';

const ValidationSchema = yup.object().shape({
  name: yup.string().required('Необходимо ввести Ваше имя'),
  password: yup
    .string()
    .min(5, ({min}) => `Пароль должен быть не менее ${min} символов`)
    .required('Пароль обязателен'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Пароли должны совпадать'),
});

type ScreenNavigationProp = StackNavigationProp<
ProfileParamList,
  Routes.EDIT_PROFILE
>;
type ScreenRouteProp = RouteProp<
ProfileParamList,
  Routes.EDIT_PROFILE
>;

interface ScreenProps {
  route: ScreenRouteProp;
  navigation: ScreenNavigationProp;
}

interface FormValues {
  name: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
  newPassword: string;
  confirmNewPassword: string;
}

const initialValues: FormValues = {
  name: '',
  lastName: '',
  phone: '',
  email: '',
  password: '',
  newPassword: '',
  confirmNewPassword: '',
};

export const EditProfileScreen: React.FC<ScreenProps> = ({
  navigation,
}) => {
  return (
    <Screen style={{padding: 20}}>
      <Text>Личные данные</Text>
      {/* <Formik
        initialValues={initialValues}
        validationSchema={ValidationSchema}
        onSubmit={(
          values: FormValues,
          {resetForm, setSubmitting}: FormikHelpers<FormValues>,
        ) => {
          setSubmitting(true);
          setTimeout(() => {
            console.log(values);
            setSubmitting(false);
            navigation.navigate(Routes.SUCCESSFUL_REGISTRATION);
            resetForm({values: initialValues});
          }, 1000);
        }}>
        {({handleSubmit, isValid, isSubmitting}) => {
          return (
            <>
              <View style={styles.form}>
                <Field
                  autofocus
                  name="name"
                  style={styles.input}
                  inputStyle={styles.input}
                  inputContainerStyle={styles.inputContainer}
                  component={InputField}
                  placeholder="Ваш имя"
                />
                <Field
                  name="password"
                  style={styles.input}
                  inputContainerStyle={styles.inputContainer}
                  component={InputField}
                  placeholder="mypassword"
                  inputStyle={styles.input}
                  secureTextEntry
                />
                <Field
                  name="confirmPassword"
                  style={styles.input}
                  inputContainerStyle={styles.inputContainer}
                  component={InputField}
                  placeholder="**********"
                  inputStyle={styles.input}
                  secureTextEntry
                />
              </View>
              <View style={styles.btnContainer}>
                <Button
                  loading={isSubmitting}
                  disabled={isSubmitting || !isValid}
                  onPress={handleSubmit}
                  title="Завершить регистрацию"
                />
              </View>
            </>
          );
        }}
      </Formik> */}
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
    fontSize: size.regular,
    color: '#B4B6BB',
  },
  inputContainer: {
    marginHorizontal: -10,
  },
});
