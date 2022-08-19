import auth from '@react-native-firebase/auth';
import React, {useCallback} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import commonStyles from '../../styles.global';
import {Like} from '../../types/firebase';
import {formatDateWithTime} from '../../utils/helpers';
import styles from './styles';
import {colors} from '../../config';

const LikeLine: React.FC<{like: Like}> = ({like}) => {
  const getLikeName = useCallback(() => {
    if (like.ownerId === auth().currentUser?.uid) {
      return 'You';
    }
    return like.ownerName;
  }, [like]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        <Icon name="cards-heart" color={colors.primary.dark} />
        {` Liked by ${getLikeName()}`}
      </Text>
      <Text style={commonStyles.caption}>
        {formatDateWithTime(like.createdAt)}
      </Text>
    </View>
  );
};
export default LikeLine;
