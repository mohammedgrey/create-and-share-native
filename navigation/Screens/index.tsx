import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import AddPostButton from '../../components/AddPostButton';
import PostModal from '../../components/AddPostModal';
import HomeScreen from '../../screens/Home';
import {TABS} from '../config';

const Stack = createNativeStackNavigator();
const NavigationScreens = () => {
  return (
    <Stack.Navigator initialRouteName={TABS.POSTS}>
      <Stack.Group>
        <Stack.Screen
          options={{
            headerRight: _ => <AddPostButton />,
          }}
          name={TABS.POSTS}
          component={HomeScreen}
        />
      </Stack.Group>
      <Stack.Group
        screenOptions={{presentation: 'modal', animation: 'slide_from_bottom'}}>
        <Stack.Screen name={TABS.POST_MODAL} component={PostModal} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
export default NavigationScreens;
