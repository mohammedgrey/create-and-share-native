import React, {ReactElement} from 'react';
import {useAuthCheck} from '../../hooks/useAuthCheck';
import LoginScreen from '../../screens/Login';

const AppAuthentication: React.FC<{
  children: ReactElement;
}> = ({children}) => {
  const user = useAuthCheck();

  if (!user) {
    return <LoginScreen />;
  }
  return children;
};
export default AppAuthentication;
