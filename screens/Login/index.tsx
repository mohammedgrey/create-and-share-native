import React, {useState} from 'react';
import {TextInput, TouchableOpacity, View, Text} from 'react-native';
import styles from './styles';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import Button from '../../components/Button';
import {friendifyFirebaseMessage} from '../../utils/helpers';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [signingUp, setSigningUp] = useState(false);
  const [error, setError] = useState('');

  //Input Validation
  let invalidInput = !email || !password;
  if (signingUp) {
    invalidInput = invalidInput || password !== confirmPassword;
  }

  const loginOrSignup = () => {
    setLoading(true);
    auth()
      [
        signingUp
          ? 'createUserWithEmailAndPassword'
          : 'signInWithEmailAndPassword'
      ](email, password)
      .catch((err: FirebaseAuthTypes.NativeFirebaseAuthError) => {
        setError(friendifyFirebaseMessage(err.message));
      })
      .finally(() => setLoading(false));
  };
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          secureTextEntry
          onChangeText={setPassword}
          placeholder="Password"
        />
        {signingUp && (
          <TextInput
            style={styles.input}
            secureTextEntry
            onChangeText={setConfirmPassword}
            placeholder="Confirm Password"
          />
        )}
      </View>

      {Boolean(error) && <Text style={styles.errorText}>{error}</Text>}

      <Button
        disabled={loading || invalidInput}
        onPress={() => loginOrSignup()}>
        <Text>{loading ? 'Loading...' : signingUp ? 'Sign Up' : 'Log In'}</Text>
      </Button>

      <View style={styles.caption}>
        <Text>
          {signingUp ? 'Already have an account?' : "Don't have an account?"}
        </Text>
        <TouchableOpacity
          disabled={loading}
          onPress={() => setSigningUp(prev => !prev)}>
          <Text style={styles.link}>{signingUp ? 'Log In' : 'Sign Up'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default LoginScreen;
