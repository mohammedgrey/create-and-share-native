import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppScreens from './navigation';
import AppAuthentication from './components/AppAuthentication';

const App = () => {
  return (
    <SafeAreaProvider>
      <AppAuthentication>
        <AppScreens />
      </AppAuthentication>
    </SafeAreaProvider>
  );
};

export default App;
