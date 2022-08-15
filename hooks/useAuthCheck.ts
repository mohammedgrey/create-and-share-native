import auth from '@react-native-firebase/auth';
import {useEffect, useState} from 'react';

export const useAuthCheck = () => {
  const [user, setUser] = useState(auth().currentUser);
  useEffect(() => {
    auth().onAuthStateChanged(setUser);
  }, []);

  return user;
};
