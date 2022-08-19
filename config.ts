import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {ParamListBase, RouteProp} from '@react-navigation/native';

export const colors = {
  primary: {
    main: '#4c1a6b',
    dark: '#34124a',
    light: '#957bd7',
  },
  grey: {
    main: '#999999',
    dark: '#444444',
    light: '#DDDDDD',
  },
};

export const screenOptions:
  | BottomTabNavigationOptions
  | ((props: {
      route: RouteProp<ParamListBase, string>;
      navigation: any;
    }) => BottomTabNavigationOptions) = {
  headerTintColor: '#FFFFFF',
  headerStyle: {
    backgroundColor: colors.primary.dark,
  },
  headerBackgroundContainerStyle: {backgroundColor: colors.primary.dark},
  tabBarActiveBackgroundColor: '#DDDDDD',
  tabBarActiveTintColor: '#000000',
  tabBarInactiveTintColor: '#000000',
};
