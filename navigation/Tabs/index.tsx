import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image} from 'react-native';
import {screenOptions} from '../../config';
import ProfileScreen from '../../screens/Profile';
import {TABS} from '../config';
import NavigationScreens from '../Screens';
import styles from './styles';

const Tab = createBottomTabNavigator();

const NavigationTabs = () => {
  const tabs = [
    {
      component: NavigationScreens,
      name: TABS.HOME,
      imageScr: require('../../assets/icons/home.png'),
    },
    {
      component: ProfileScreen,
      name: TABS.PROFILE,
      imageScr: require('../../assets/icons/user.png'),
    },
  ];

  return (
    <Tab.Navigator screenOptions={screenOptions} initialRouteName={TABS.HOME}>
      {tabs.map(({name, component, imageScr}) => {
        return (
          <Tab.Screen
            key={name}
            options={{
              tabBarIcon: _ => <Image style={styles.icon} source={imageScr} />,
            }}
            name={name}
            component={component}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default NavigationTabs;
