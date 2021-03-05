import React from 'react';
import {View, TextInput, TextInputProps} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors, rems} from '../config';

export const Input = (props: TextInputProps) => {
  return (
    <View style={styles.textInputContainer}>
      <TextInput {...props} />
    </View>
  );
};

const styles = EStyleSheet.create({
  textInputContainer: {
    borderColor: Colors.inputFieldBorderColor,
    borderBottomWidth: rems[1],
    borderWidth: 1,
  },
});
