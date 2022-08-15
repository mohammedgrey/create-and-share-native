import {StyleSheet} from 'react-native';
import commonStyles from '../../styles.global';
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    ...commonStyles.shadow,
    backgroundColor: '#FFFFFF',
    padding: 20,
    alignSelf: 'stretch',
    textAlign: 'center',
    marginBottom: 20,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  input: {
    borderBottomColor: '#999999',
    borderBottomWidth: 1,
  },
  caption: {
    marginTop: 20,
    flexDirection: 'row',
  },
  link: {
    fontWeight: '700',
    marginLeft: 10,
  },
  errorText: {
    color: 'rgb(255, 0, 0)',
    marginBottom: 20,
  },
});
