import auth from '@react-native-firebase/auth';
import React from 'react';
import {Text, View} from 'react-native';
import Button from '../../components/Button';
import styles from './styles';

const InfoLine: React.FC<{label: string; value: string}> = ({label, value}) => {
  return (
    <View style={styles.textView}>
      <Text style={styles.textLabel}>{label}</Text>
      <Text style={styles.textValue}>{value}</Text>
    </View>
  );
};

const ProfileScreen = () => {
  const currentUser = auth().currentUser;

  return (
    <View style={styles.container}>
      <View style={styles.data}>
        <InfoLine label="Email" value={currentUser?.email ?? 'NA'} />
        <InfoLine label="Name" value={currentUser?.displayName ?? 'NA'} />
        <InfoLine label="Phone" value={currentUser?.phoneNumber ?? 'NA'} />
      </View>
      <View style={styles.bottom}>
        <Button onPress={() => auth().signOut()}>Sign Out</Button>
      </View>
    </View>
  );
};
export default ProfileScreen;
