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
  Routes.RESTORE_ACCESS
>;
type ScreenRouteProp = RouteProp<AuthStackParamList, Routes.RESTORE_ACCESS>;

interface ScreenProps {
  route: ScreenRouteProp;
  navigation: ScreenNavigationProp;
}

interface FormValues {
  emailOrPhone: string;
}

const initialValues: FormValues = {
  emailOrPhone: '',
};

export const RestoreScreen: React.FC<ScreenProps> = () => {
  const navigation = useNavigation<ScreenNavigationProp>();

  return (
    <Screen style={styles.screen} Header={<AuthHeader />}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <ArrowLeftIcon onPress={() => navigation.goBack()} />
        <Text style={[globalStyles.title, {marginLeft: 20}]}>
          Восстановление доступа к аккаунту
        </Text>
      </View>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(
          values: FormValues,
          {resetForm, setSubmitting}: FormikHelpers<FormValues>,
        ) => {
          console.log(values);
          navigation.navigate(Routes.RESTORE_ACCESS_COMPLETE);
          setTimeout(() => {
            resetForm({values: initialValues});
          }, 400);
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
              </View>
              <View style={styles.btnContainer}>
                <Button
                  loading={isSubmitting}
                  disabled={isSubmitting || !isValid}
                  onPress={handleSubmit}
                  title="Напомнить"
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
