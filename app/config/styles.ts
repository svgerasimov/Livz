import {StyleSheet} from 'react-native';
import {size} from './fonts';
import {Colors} from './colors';

export const globalStyles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: size.title,
    color: Colors.title,
  },
  text: {
    fontSize: size.regular,
    color: Colors.text,
  },
});
