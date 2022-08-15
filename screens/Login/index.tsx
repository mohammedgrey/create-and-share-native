import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import Button from '../../components/Button';
import commonStyles from '../../styles.global';
import {friendifyFirebaseMessage} from '../../utils/helpers';
import styles from './styles';

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
      ](email.trim(), password)
      .catch((err: FirebaseAuthTypes.NativeFirebaseAuthError) => {
        setError(friendifyFirebaseMessage(err.message));
      })
      .finally(() => setLoading(false));
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={commonStyles.title}>
          {signingUp ? 'Sign Up' : 'Log In'}
        </Text>
        <Text style={commonStyles.caption}>
          {signingUp
            ? 'Create your account to start creating and sharing'
            : 'Login and start creating now'}
        </Text>
      </View>

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
        {Boolean(confirmPassword) && confirmPassword !== password && (
          <Text style={styles.errorText}>{"Passwords don't match"}</Text>
        )}
      </View>

      {Boolean(error) && <Text style={styles.errorText}>{error}</Text>}

      <Button
        disabled={loading || invalidInput}
        loading={loading}
        onPress={() => loginOrSignup()}>
        {signingUp ? 'Sign Up' : 'Log In'}
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
