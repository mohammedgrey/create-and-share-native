import {StyleSheet} from 'react-native';
import commonStyles from '../../styles.global';

export default StyleSheet.create({
  container: {
    padding: 20,
    position: 'absolute',
    left: 20,
    right: 20,
    bottom: 20,
    ...commonStyles.shadow,
  },
});
