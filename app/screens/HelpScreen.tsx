import React, {useState} from 'react';
import {StyleSheet, Text, View, Dimensions, ScrollView} from 'react-native';
import {Screen} from '../components';
import EStyleSheet from 'react-native-extended-stylesheet';
import {
  UserIcon,
  CircleIcon,
  RingIcon,
  QuestionMarkIcon,
  ArrowDownIcon,
  ArrowUpIcon,
} from '../components/svg/icons';
import {Button, ProfileAdvertCard, Row, InputField} from '../components';
import Collapsible from 'react-native-collapsible';

import {useTypedSelector, useActions} from '../hooks';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Formik, FormikHelpers, Field} from 'formik';
import * as yup from 'yup';
import {rems, Colors, size, globalStyles} from '../config';
import {Routes} from '../navigation/routes';

const validationSchema = yup.object().shape({
  name: yup.string().required('Необходимо ввести Ваше имя'),
  email: yup.string().required('Необходимо ввести email'),
  question: yup.string().required('Необходимо ввести вопрос'),
});

interface FormValues {
  name: string;
  email: string;
  question: string;
}

const initialValues: FormValues = {
  name: '',
  email: '',
  question: '',
};

export const HelpScreen = ({navigation}) => {
  const [isHowToAddObjectCollapsed, seHowToAddObjectCollapsed] = useState(true);
  const [isIAddedAdvertCollapsed, setIAddedAdvertCollapsed] = useState(true);
  const [isCantSignUpCollapsed, setCantSignUpCollapsed] = useState(true);
  return (
    <Screen style={styles.screen}>
      <Row style={styles.row}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            seHowToAddObjectCollapsed((prevState) => !prevState);
          }}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            // justifyContent: 'space-between',
            // backgroundColor: 'aqua',
          }}>
          <View style={styles.iconContainer}>
            <QuestionMarkIcon color="white" />
          </View>

          <Text
            style={{
              fontSize: 18,
              lineHeight: 23,
              color: '#171B22',
              paddingLeft: 11,
            }}>
            Как добавить объект в каталог?
          </Text>
          <View
            style={{
              flexGrow: 1,
              alignSelf: 'auto',
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              //   paddingTop: 3
            }}>
            {isHowToAddObjectCollapsed ? (
              <ArrowDownIcon color="#65AB3E" width={15} height={15} />
            ) : (
              <ArrowUpIcon color="#65AB3E" width={15} height={15} />
            )}
            {/* <ArrowDownIcon onPress={() => {
                seHowToAddObjectCollapsed((prevState) => !prevState);
            }} color="#65AB3E" width={15} height={15} /> */}
          </View>
        </TouchableOpacity>
        <Collapsible collapsed={isHowToAddObjectCollapsed}>
          <Text style={{fontSize: 13, color: '#636467', lineHeight: 22}}>
            Значимость этих проблем настолько очевидна, что дальнейшее развитие
            различных форм деятельности позволяет оценить значение форм
            развития. Задача организации, в особенности же рамки и место
            обучения кадров обеспечивает широкому кругу (специалистов) участие в
            формировании позиций, занимаемых участниками в отношении
            поставленных задач.
          </Text>
        </Collapsible>
      </Row>
      <Row style={styles.row}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            setIAddedAdvertCollapsed((prevState) => !prevState);
          }}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            // justifyContent: 'space-between',
            // backgroundColor: 'aqua',
          }}>
          <View style={styles.iconContainer}>
            <QuestionMarkIcon color="white" />
          </View>

          <Text
            style={{
              fontSize: 18,
              lineHeight: 23,
              color: '#171B22',
              paddingLeft: 11,
            }}>
            Я добавил объявление но его нет в каталоге
          </Text>
          <View
            style={{
              flexGrow: 1,
              alignSelf: 'auto',
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
            }}>
            {isIAddedAdvertCollapsed ? (
              <ArrowDownIcon color="#65AB3E" width={15} height={15} />
            ) : (
              <ArrowUpIcon color="#65AB3E" width={15} height={15} />
            )}
          </View>
        </TouchableOpacity>
        <Collapsible collapsed={isIAddedAdvertCollapsed}>
          <Text style={{fontSize: 13, color: '#636467', lineHeight: 22}}>
            Значимость этих проблем настолько очевидна, что дальнейшее развитие
            различных форм деятельности позволяет оценить значение форм
            развития. Задача организации, в особенности же рамки и место
            обучения кадров обеспечивает широкому кругу (специалистов) участие в
            формировании позиций, занимаемых участниками в отношении
            поставленных задач.
          </Text>
        </Collapsible>
      </Row>
      <Row style={styles.row}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            setCantSignUpCollapsed((prevState) => !prevState);
          }}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            // justifyContent: 'space-between',
            // backgroundColor: 'aqua',
          }}>
          <View style={styles.iconContainer}>
            <QuestionMarkIcon color="white" />
          </View>

          <Text
            style={{
              fontSize: 18,
              lineHeight: 23,
              color: '#171B22',
              paddingLeft: 11,
            }}>
            Не получается зарегестрироваться в приложении?
          </Text>
          <View
            style={{
              flexGrow: 1,
              alignSelf: 'auto',
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              //   paddingTop: 3
            }}>
            {/* <ArrowDownIcon onPress={() => {
                setCantSignUpCollapsed((prevState) => !prevState);
            }} color="#65AB3E" width={15} height={15} /> */}
            {isCantSignUpCollapsed ? (
              <ArrowDownIcon color="#65AB3E" width={15} height={15} />
            ) : (
              <ArrowUpIcon color="#65AB3E" width={15} height={15} />
            )}
          </View>
        </TouchableOpacity>
        <Collapsible collapsed={isCantSignUpCollapsed}>
          <Text style={{fontSize: 13, color: '#636467', lineHeight: 22}}>
            Значимость этих проблем настолько очевидна, что дальнейшее развитие
            различных форм деятельности позволяет оценить значение форм
            развития. Задача организации, в особенности же рамки и место
            обучения кадров обеспечивает широкому кругу (специалистов) участие в
            формировании позиций, занимаемых участниками в отношении
            поставленных задач.
          </Text>
        </Collapsible>
      </Row>

      <Row style={[styles.row, {marginTop: 12}]}>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#E7EAF0',
            borderRadius: 19,
            padding: 20,
          }}>
          <Text
            style={{
              fontSize: 27,
              color: 'black',
              textAlign: 'center',
              lineHeight: 35,
              marginBottom: 6,
            }}>
            Напишите нам
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: '#373A3F',
              textAlign: 'center',
              lineHeight: 20,
            }}>
            Если не нашли ответ на свой вопрос, свяжитесь с нами.
          </Text>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(
              values: FormValues,
              {resetForm, setSubmitting}: FormikHelpers<FormValues>,
            ) => {
              console.log(values);
              setTimeout(() => {
                navigation.goBack();  
                setSubmitting(false);
                resetForm({values: initialValues});
              }, 500);
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
                      placeholder="Ваше имя"
                    />
                    <Field
                      autofocus
                      name="email"
                      style={styles.input}
                      inputStyle={styles.input}
                      inputContainerStyle={styles.inputContainer}
                      component={InputField}
                      placeholder="Ваш email"
                    />
                    <Field
                      autofocus
                      name="question"
                      style={styles.input}
                      inputStyle={styles.input}
                      inputContainerStyle={styles.inputContainer}
                      component={InputField}
                      placeholder="Введите свой вопрос"
                    />
                  </View>
                  <View style={styles.btnContainer}>
                    <Button
                      buttonStyle={{width: '100%'}}
                      loading={isSubmitting}
                      disabled={isSubmitting || !isValid}
                      color="dark"
                      onPress={handleSubmit}
                      title="Отправить"
                    />
                  </View>
                </>
              );
            }}
          </Formik>
        </View>
      </Row>
    </Screen>
  );
};

const styles = EStyleSheet.create({
  $iconSize: rems[28],
  iconContainer: {
    width: '$iconSize',
    height: '$iconSize',
    borderRadius: '0.5 * $iconSize',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#353A40',
  },
  screen: {
    padding: rems[20],
  },
  row: {
    marginBottom: rems[20],
  },
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
});
