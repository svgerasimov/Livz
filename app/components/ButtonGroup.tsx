import React from 'react';
import {
  ButtonGroup as RNButtonGroup,
  ButtonGroupProps,
} from 'react-native-elements';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors, rems} from '../config';

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  onPress,
  selectedIndex,
  buttons,
  containerStyle = {},
}) => {
  return (
    <RNButtonGroup
      onPress={onPress}
      selectedIndex={selectedIndex}
      buttons={buttons}
      containerStyle={[styles.container, containerStyle]}
      buttonContainerStyle={styles.buttonContainer}
      selectedButtonStyle={styles.selectedButton}
      selectedTextStyle={[styles.text, styles.selectedText]}
      textStyle={[styles.text, styles.unselectedText]}
    />
  );
};

const styles = EStyleSheet.create({
  container: {
    height: rems[40],
    borderWidth: 1,
    borderColor: Colors.btnGroupBorderColor,
    borderRadius: 0,
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    marginTop: 0,
  },
  buttonContainer: {
    borderRightWidth: 0,
  },
  selectedButton: {
    backgroundColor: Colors.primaryColor,
  },
  text: {
    fontSize: rems[13],
    fontWeight: '400',
  },
  selectedText: {
    color: Colors.white,
  },
  unselectedText: {
    color: Colors.black,
  },
});
