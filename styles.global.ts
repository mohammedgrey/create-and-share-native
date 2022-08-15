import {StyleSheet} from 'react-native';

export default StyleSheet.create({
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
});
