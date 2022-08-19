import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {screenOptions} from '../../config';
import ProfileScreen from '../../screens/Profile';
import {TABS} from '../config';
import NavigationScreens from '../Screens';
import Icon from 'react-native-vector-icons/Octicons';

const Tab = createBottomTabNavigator();

const NavigationTabs = () => {
  const tabs = [
    {
      component: NavigationScreens,
      name: TABS.HOME,
      iconName: 'home',
    },
    {
      component: ProfileScreen,
      name: TABS.PROFILE,
      iconName: 'person',
    },
  ];

  return (
    <Tab.Navigator screenOptions={screenOptions} initialRouteName={TABS.HOME}>
      {tabs.map(({name, component, iconName}) => {
        return (
          <Tab.Screen
            key={name}
            options={{
              tabBarIcon: _ => (
                <Icon name={iconName} size={20} color="#000000" />
              ),
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
