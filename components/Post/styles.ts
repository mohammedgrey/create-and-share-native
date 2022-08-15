import {StyleSheet} from 'react-native';
import commonStyles from '../../styles.global';

export default StyleSheet.create({
  container: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    ...commonStyles.shadow,
  },
  date: {
    color: '#999999',
    fontSize: 12,
  },
  text: {
    color: '#000000',
    fontSize: 16,
    marginTop: 10,
    borderLeftColor: '#CCCCCC',
    borderLeftWidth: 3,
    paddingLeft: 10,
  },
  name: {
    color: '#999999',
    fontWeight: '700',
  },
});
