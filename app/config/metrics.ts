import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export const rem =
  width < 325
    ? 12
    : width < 380
    ? 14
    : width < 560
    ? 15
    : width < 768
    ? 17
    : width < 3000
    ? 22
    : 22;

export const rems = Array.from({length: 500}, (_, i) => `${i / rem}rem`);

export const Metrics = {
  authHeaderHeightPercentage: 17.6,
  navBarHeight: 20,

  marginHorizontal: 20,
  marginVertical: 30,

  listItemHeight: 116,
  buttonHeight: 50,
  buttonWidth: 250,
  buttonBorderRadius: 50,

  separator: StyleSheet.hairlineWidth,
  border: 2,
  borderThin: 1,

  tabBarIcon: 28,

  spaceSmall: 2,
  spaceMedium: 8,
  spaceBig: 16,
};
