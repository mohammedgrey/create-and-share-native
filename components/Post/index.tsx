import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {LogBox, Text, TouchableOpacity, View} from 'react-native';
import IconMaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../config';
import {usePostItem} from '../../hooks/usePostItem';
import {TABS} from '../../navigation/config';
import commonStyles from '../../styles.global';
import type {Post as PostInterface, TextPost} from '../../types/firebase';
import {formatDateWithTime} from '../../utils/helpers';
import styles from './styles';

//Clickable Component to go to the single post screen
const Post: React.FC<{post: PostInterface}> = ({post}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate(TABS.POST as never, {postId: post.id} as never)
      }>
      <PostItem post={post} />
    </TouchableOpacity>
  );
};
export default Post;

//Nonclickable (Used in the home screen as well as the single post screen)
export const PostItem: React.FC<{post: PostInterface}> = ({post}) => {
  const {post: postItem, likeOrUnlike, updatePost} = usePostItem(post);
  const navigation = useNavigation();
  return (
    <View>
      <Text style={styles.name}>{postItem?.ownerName ?? ''}</Text>
      <Text style={styles.date}>
        {formatDateWithTime(new Date(postItem?.createdAt ?? '')) ?? ''}
      </Text>
      <Text style={styles.text}>{(postItem as TextPost)?.text ?? ''}</Text>
      <View style={commonStyles.placeAtTheEnd}>
        {/* EDIT */}
        {postItem?.myPost && (
          <IconMaterial
            onPress={() =>
              navigation.navigate(
                TABS.POST_MODAL as never,
                {post, updatePost} as never,
              )
            }
            name="edit"
            color={colors.grey.main}
            size={25}
            style={commonStyles.mr}
          />
        )}
        {/* LIKE */}
        <IconMaterialCommunity
          onPress={likeOrUnlike}
          name={`cards-heart${postItem?.likedByMe ? '' : '-outline'}`} // '' means the heart is full
          color={colors.primary.dark}
          size={25}
        />
        <Text style={commonStyles.caption}>{postItem?.likesCount}</Text>
      </View>
    </View>
  );
};

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);
