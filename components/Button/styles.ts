import {StyleSheet} from 'react-native';
import {colors} from '../../config';

export default StyleSheet.create({
  button: {
    backgroundColor: colors.primary.main,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    alignSelf: 'stretch',
  },
  text: {
    color: '#FFFFFF',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});
