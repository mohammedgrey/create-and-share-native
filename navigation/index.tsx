import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import NavigationTabs from './Tabs';

const AppScreens = () => {
  return (
    <NavigationContainer>
      <NavigationTabs />
    </NavigationContainer>
  );
};
export default AppScreens;
