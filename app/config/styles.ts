import {StyleSheet} from 'react-native';
import Fonts from './fonts';
import Colors from './colors';

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: Fonts.size.title,
    color: Colors.title,
  },
  text: {
    fontSize: Fonts.size.regular,
    color: Colors.text,
  },
});

export default styles;
