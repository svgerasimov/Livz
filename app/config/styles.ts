import {StyleSheet} from 'react-native';
import {Fonts, Colors} from './index';

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
});

export default styles;
