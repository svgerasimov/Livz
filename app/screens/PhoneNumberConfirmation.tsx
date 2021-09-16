import React, {useRef} from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {AuthStackParamList} from '../navigation/AuthNavigator';
import {Routes} from '../navigation/routes';
import {Button, AuthHeader, Screen, InputField, Row} from '../components';
import {ArrowLeftIcon} from '../components/svg/icons';
import {size, globalStyles, rems} from '../config';
import {Formik, FormikHelpers, Field} from 'formik';
import EStyleSheet from 'react-native-extended-stylesheet';
import {delay} from '../utility';

import * as yup from 'yup';

const ValidationSchema = yup.object().shape({
  code: yup.string().required('Необходимо ввести код'),
});

type ScreenNavigationProp = StackNavigationProp<
  AuthStackParamList,
  Routes.PHONE_NUMBER_CONFIRMATION
>;
type ScreenRouteProp = RouteProp<
  AuthStackParamList,
  Routes.PHONE_NUMBER_CONFIRMATION
>;

interface ScreenProps {
  navigation: ScreenNavigationProp;
  route: ScreenRouteProp;
}

interface FormValues {
  code: string;
}

const initialValues: FormValues = {
  code: '',
};

export const PhoneNumberConfirmationScreen: React.FC<ScreenProps> = ({
  navigation,
}) => {
  return (
    <Screen style={{padding: 20}} Header={<AuthHeader />}>
      <Row style={styles.row}>
        <Text style={[globalStyles.title]}>Подтвердите номер телефона</Text>
      </Row>
      <Row style={styles.row}>
        <Text style={{color: '#848484', fontSize: 14, textAlign: 'center'}}>
          Мы выслали электронное письмо для подтверждения регистрации. Проверьте
          свой ящик
        </Text>
      </Row>
      <Row style={styles.row}>
        <Text style={{color: 'black', fontSize: 14, textAlign: 'center'}}>
          Для завершения регистрации введите код:
        </Text>
      </Row>

      <Formik
        initialValues={initialValues}
        validationSchema={ValidationSchema}
        onSubmit={(
          values: FormValues,
          {resetForm, setSubmitting}: FormikHelpers<FormValues>,
        ) => {
          setSubmitting(false);
          navigation.navigate(Routes.COMPLETE_REGISTRATION);
          resetForm({values: initialValues});
        }}>
        {({handleSubmit, isValid, isSubmitting}) => {
          return (
            <>
              <View style={styles.form}>
                <Field
                  autofocus
                  name="code"
                  style={styles.input}
                  inputStyle={styles.input}
                  inputContainerStyle={styles.inputContainer}
                  component={InputField}
                  placeholder="57405"
                />
              </View>
              <View style={styles.btnContainer}>
                <Button
                  color="dark"
                  loading={isSubmitting}
                  disabled={isSubmitting || !isValid}
                  onPress={handleSubmit}
                  title="Продолжить"
                />
              </View>
            </>
          );
        }}
      </Formik>
    </Screen>
  );
};
const styles = EStyleSheet.create({
  form: {
    // marginVertical: 14,
    width: '50%',
    alignSelf: 'center',
  },
  btnContainer: {
    alignItems: 'center',
  },
  input: {
    fontSize: size.regular,
    color: '#B4B6BB',
    textAlign: 'center',
  },
  inputContainer: {
    marginHorizontal: -10,
  },
  row: {
    marginBottom: rems[20],
  },
});
