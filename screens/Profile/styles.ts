import {StyleSheet} from 'react-native';
import commonStyles from '../../styles.global';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  data: {
    ...commonStyles.shadow,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    marginBottom: 20,
    padding: 20,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  textView: {
    marginBottom: 20,
  },
  textLabel: {
    color: 'grey',
  },
  textValue: {
    fontWeight: '700',
  },
});
