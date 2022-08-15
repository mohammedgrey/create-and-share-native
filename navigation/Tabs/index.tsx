import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image} from 'react-native';
import {colors} from '../../config';
import ProfileScreen from '../../screens/Profile';
import {TABS} from '../config';
import NavigationScreens from '../Screens';
import styles from './styles';

const Tab = createBottomTabNavigator();

const NavigationTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTintColor: 'grey',
        tabBarActiveBackgroundColor: colors.primary.light,
        tabBarActiveTintColor: '#000000',
      }}
      initialRouteName={TABS.HOME}>
      <Tab.Screen
        options={{
          tabBarIcon: _ => (
            <Image
              style={styles.icon}
              source={require('../../assets/icons/home.png')}
            />
          ),
        }}
        name={TABS.HOME}
        component={NavigationScreens}
      />
      <Tab.Screen
        options={{
          tabBarIcon: _ => (
            <Image
              style={styles.icon}
              source={require('../../assets/icons/user.png')}
            />
          ),
        }}
        name={TABS.PROFILE}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default NavigationTabs;
