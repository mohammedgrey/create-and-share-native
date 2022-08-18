import {StyleSheet} from 'react-native';
import {colors} from './config';

const commonStyles = StyleSheet.create({
  shadow: {
    //For Android
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    //For IOS
    elevation: 5,
  },
  title: {
    fontSize: 25,
    color: colors.primary.main,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 10,
    textTransform: 'uppercase',
  },
  caption: {
    fontSize: 12,
    color: '#999999',
    textAlign: 'center',
  },
  placeAtTheEnd: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});
export default commonStyles;
