import {StyleSheet} from 'react-native';
import {colors} from '../../config';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  text: {
    color: colors.grey.dark,
    fontWeight: '700',
  },
});
