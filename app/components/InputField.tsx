import React, {useState} from 'react';
import {Input} from 'react-native-elements';
import {Colors} from '../config';
import {StyleSheet} from 'react-native';

type InputFieldType = {
  [key: string]: any;
};

export const InputField: React.FC<InputFieldType> = (props) => {
  const [isActive, setActive] = useState(false);
  const {
    field: {name, onBlur, onChange, value},
    form: {errors, touched, setFieldTouched},
    ...inputProps
  } = props;
  const hasError = errors[name] && touched[name];
  const inputStyles = inputProps.inputStyle && {...inputProps.inputStyle};
  const inputContainerStyles = inputProps.inputContainerStyle && {
    ...inputProps.inputContainerStyle,
  };

  const getBorderColor = () =>
    hasError
      ? Colors.error
      : isActive
      ? Colors.darkslategray
      : Colors.lightGray;

  return (
    <Input
      {...inputProps}
      value={value}
      onFocus={() => {
        setActive(true);
      }}
      onBlur={() => {
        setFieldTouched(name);
        onBlur(name);
        setActive(false);
      }}
      onChangeText={(text) => onChange(name)(text)}
      inputContainerStyle={[
        inputContainerStyles,
        {borderColor: getBorderColor()},
      ]}
      errorStyle={styles.errorText}
      errorMessage={hasError && errors[name]}
      style={[inputStyles]}
      placeholderTextColor={Colors.lightGray}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 0,
    height: 48,
    textAlign: 'center',
  },
  errorInputContainer: {
    borderColor: Colors.error,
  },
  errorText: {
    color: Colors.error,
  },
  inputContainer: {
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 4,
  },
});
