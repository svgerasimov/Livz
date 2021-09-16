import React, {useRef} from 'react';
import {Text, TouchableOpacity, View, ScrollView} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {ProfileParamList} from '../navigation/ProfileStack';
import {Routes} from '../navigation/routes';
import {Button, AuthHeader, Screen, InputField} from '../components';
import {ArrowLeftIcon} from '../components/svg/icons';
import {size, globalStyles} from '../config';
import {Formik, FormikHelpers, Field} from 'formik';
import {rems, Colors} from '../config';

import * as yup from 'yup';
import EStyleSheet from 'react-native-extended-stylesheet';
import {useActions} from '../hooks';
import { useSelector } from 'react-redux';

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
type ScreenRouteProp = RouteProp<ProfileParamList, Routes.EDIT_PROFILE>;

interface ScreenProps {
  route: ScreenRouteProp;
  navigation: ScreenNavigationProp;
}

interface FormValues {
  name: string | undefined;
  lastName: string | undefined;
  phone: string | undefined;
  email: string | undefined;
  old_password: string | undefined;
  new_password: string | undefined;
  password: string | undefined;
}

const initialValues: FormValues = {
  name: undefined,
  lastName: undefined,
  phone: undefined,
  email: undefined,
  password: undefined,
  old_password: undefined,
  new_password: undefined,
};

export const EditProfileScreen: React.FC<ScreenProps> = ({navigation}) => {
  const {UpdateUserData} = useActions();
  const userData = useSelector((state) => state.user.data);

  return (
    <Screen style={{padding: 20}}>
      <ScrollView>
        <Text style={styles.bigLabel}>Личные данные</Text>
        <Formik
          initialValues={initialValues}
          validationSchema={ValidationSchema}
          onSubmit={(
            values: FormValues,
            {resetForm, setSubmitting}: FormikHelpers<FormValues>,
          ) => {
            setSubmitting(true);
            setTimeout(() => {
              console.log(values);
              UpdateUserData(values);
              setSubmitting(false);
              resetForm({values: initialValues});
            }, 1000);
          }}>
          {({handleSubmit, isValid, isSubmitting}) => {
            return (
              <>
                <View style={styles.form}>
                  <Text style={styles.label}>Ваше имя</Text>
                  <Field
                    autofocus
                    name="name"
                    style={styles.input}
                    inputStyle={styles.input}
                    inputContainerStyle={styles.inputContainer}
                    component={InputField}
                    placeholder="Имя"
                    defaultValue={userData.name}
                  />
                  <Text style={styles.label}>Фамилия</Text>
                  <Field
                    name="surname"
                    style={styles.input}
                    inputStyle={styles.input}
                    inputContainerStyle={styles.inputContainer}
                    component={InputField}
                    placeholder="Фамилия"
                    defaultValue={userData.lastName}
                  />
                  <Text style={styles.label}>Дата рождения</Text>
                  <Field
                    name="birthday"
                    style={styles.input}
                    inputStyle={styles.input}
                    inputContainerStyle={styles.inputContainer}
                    component={InputField}
                    placeholder="Дата рождения"
                    defaultValue={userData.dob}
                  />
                  <Text style={styles.bigLabel}>Контактные данные</Text>
                  <Text style={styles.label}>Телефон</Text>
                  <Field
                    name="phone"
                    style={styles.input}
                    inputStyle={styles.input}
                    inputContainerStyle={styles.inputContainer}
                    component={InputField}
                    placeholder="Телефон"
                    defaultValue={userData.phone}
                  />
                  <Text style={styles.label}>Email</Text>
                  <Field
                    name="email"
                    style={styles.input}
                    inputStyle={styles.input}
                    inputContainerStyle={styles.inputContainer}
                    component={InputField}
                    placeholder="Email"
                    defaultValue={userData.email}
                  />
                  <Text style={styles.bigLabel}>Смена пароля</Text>
                  <Text style={styles.label}>Текущий пароль</Text>
                  <Field
                    name="old_password"
                    style={styles.input}
                    inputContainerStyle={styles.inputContainer}
                    component={InputField}
                    placeholder="**********"
                    inputStyle={styles.input}
                    secureTextEntry
                  />
                  <Text style={styles.label}>Новый пароль</Text>
                  <Field
                    name="password"
                    style={styles.input}
                    inputContainerStyle={styles.inputContainer}
                    component={InputField}
                    placeholder="**********"
                    inputStyle={styles.input}
                    secureTextEntry
                  />
                  <Text style={styles.label}>Новый пароль еще раз</Text>
                  <Field
                    name="new_password"
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
        </Formik>
      </ScrollView>
    </Screen>
  );
};
const styles = EStyleSheet.create({
  form: {
    marginBottom: 14,
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
  label: {
    color: Colors.labelColor,
    fontSize: rems[13],
  },
  bigLabel: {
    color: '#000',
    fontSize: 18,
    fontFamily: 'PT Sans Caption',
    marginBottom: 16,
  },
});
