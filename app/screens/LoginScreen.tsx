import React, {useState} from 'react';
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
import {
  VkIcon,
  GoogleIcon,
  FacebookIcon,
  OdnoklassnikiIcon,
  MailIcon,
  DotsIcon,
  ArrowLeftIcon,
} from '../components/svg/icons';
import {useActions} from '../hooks';
import {delay} from '../utility';

import * as yup from 'yup';
import {useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';
// import {GoogleSignin} from '@react-native-google-signin/google-signin';
// import {LoginManager, AccessToken} from 'react-native-fbsdk';

const loginValidationSchema = yup.object().shape({
  emailOrPhone: yup.string().required('Необходимо ввести номер или e-mail'),
  password: yup
    .string()
    .min(5, ({min}) => `Пароль должен быть не менее ${min} символов`)
    .required('Пароль обязателен'),
});

type LoginScreenNavigationProp = StackNavigationProp<
  AuthStackParamList,
  Routes.LOGIN
>;
type LoginScreenRouteProp = RouteProp<AuthStackParamList, Routes.LOGIN>;

interface LoginScreenProps {
  navigation: LoginScreenNavigationProp;
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

export const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  const {login} = useActions();
  const [isCorrect, setIsCorrect] = useState(true);

  const token = useSelector((state) => state.auth.token);

  // async function onGoogleButtonPress() {
  //   const {idToken} = await GoogleSignin.signIn();
  //   const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  //   return auth().signInWithCredential(googleCredential);
  // }

  // async function onFacebookButtonPress() {
  //   const result = await LoginManager.logInWithPermissions([
  //     'public_profile',
  //     'email',
  //   ]);
  //   if (result.isCancelled) {
  //     throw 'User cancelled the login process';
  //   }

  //   const data = await AccessToken.getCurrentAccessToken();

  //   if (!data) {
  //     throw 'Something went wrong obtaining access token';
  //   }

  //   const facebookCredential = auth.FacebookAuthProvider.credential(
  //     data.accessToken,
  //   );

  //   return auth().signInWithCredential(facebookCredential);
  // }

  return (
    <Screen style={{padding: 20}} Header={<AuthHeader />}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <ArrowLeftIcon onPress={() => navigation.goBack()} />
        <Text style={[globalStyles.title, {marginLeft: 20}]}>
          Вход в аккаунт
        </Text>
      </View>

      <Formik
        initialValues={initialValues}
        validationSchema={loginValidationSchema}
        onSubmit={(
          values: FormValues,
          {resetForm, setSubmitting}: FormikHelpers<FormValues>,
        ) => {
          setSubmitting(true);
          setSubmitting(false);
          login({password: values.password, login: values.emailOrPhone});
          resetForm({values: initialValues});
          if (!token) {
            setIsCorrect(false);
          }

          // setTimeout(() => {
          //   // console.log(values);
          //   setSubmitting(false);
          //   login();
          //   resetForm({values: initialValues});
          // }, 500);
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
                {!isCorrect && (
                  <Text
                    style={[
                      globalStyles.text,
                      {
                        marginVertical: 20,
                        alignSelf: 'center',
                        color: '#F60A12',
                      },
                    ]}>
                    Неправильный логин или пароль
                  </Text>
                )}
              </View>
              <View style={styles.btnContainer}>
                <Button
                  loading={isSubmitting}
                  disabled={isSubmitting || !isValid}
                  onPress={handleSubmit}
                  title="Войти"
                />
                <Button
                  buttonStyle={{marginVertical: 13}}
                  color="smoke"
                  onPress={() => navigation.navigate(Routes.RESTORE_ACCESS)}
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

      <Text
        style={[globalStyles.text, {marginVertical: 20, alignSelf: 'center'}]}>
        или
      </Text>
      <Row style={styles.row}>
        <View style={styles.iconContainer}>
          {/* <Social
            containerStyle={styles.social}
            onPress={() => {}}
            color="#5181B8"
            Icon={VkIcon}
          /> */}
          <Social
            containerStyle={styles.social}
            onPress={() => {
              // onGoogleButtonPress();
            }}
            color="#EA4335"
            Icon={GoogleIcon}
          />
          <Social
            containerStyle={styles.social}
            onPress={() => {
              // onFacebookButtonPress().then(() =>
              //   console.log('Signed in with Facebook!'),
              // );
            }}
            color="#4867AA"
            Icon={FacebookIcon}
          />
          {/* <Social
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
          /> */}
          {/* <Social onPress={() => {}} color="#E4E7EC" Icon={DotsIcon} /> */}
        </View>
      </Row>
      <Text
        style={[
          globalStyles.text,
          {
            alignSelf: 'center',
            textAlign: 'center',
            fontSize: size.small,
          },
        ]}>
        Продолжая, вы подтверждаете согласие с нашей политикой
        конфиденциальности и правилами использования
      </Text>
    </Screen>
  );
};
const styles = EStyleSheet.create({
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
  row: {
    marginBottom: rems[20],
  },
  social: {
    marginRight: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
