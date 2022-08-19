import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import LikeLine from '../../components/LikeLine';
import {PostItem} from '../../components/Post';
import {usePostGet} from '../../hooks/usePostGet';
import styles from './styles';

const PostScreen: React.FC<{route: any}> = ({route}) => {
  const navigation = useNavigation();
  const postId = route.params.postId;
  const post = usePostGet(postId);

  //Set header text
  useEffect(() => {
    navigation.setOptions({
      headerTitle: `${post?.ownerName ?? ''}'s Creation`,
    });
  }, [navigation, post]);

  return (
    <FlatList
      ListHeaderComponent={
        <View style={styles.post}>
          <PostItem post={post} />
        </View>
      }
      style={styles.container}
      data={Object.values(post?.likes ?? {})}
      keyExtractor={item => item.ownerId}
      renderItem={({item}) => <LikeLine like={item} />}
    />
  );
};
export default PostScreen;
