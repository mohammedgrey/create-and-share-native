import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../config';
import {usePostItem} from '../../hooks/usePostItem';
import commonStyles from '../../styles.global';
import type {Post as PostInterface, TextPost} from '../../types/firebase';
import {formatDateWithTime} from '../../utils/helpers';
import styles from './styles';

const Post: React.FC<{post: PostInterface & TextPost}> = ({post}) => {
  const {post: postItem, likeOrUnlike} = usePostItem(post);
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.name}>{postItem?.ownerName ?? ''}</Text>
      <Text style={styles.date}>
        {formatDateWithTime(new Date(postItem?.createdAt ?? '')) ?? ''}
      </Text>
      <Text style={styles.text}>{(postItem as TextPost)?.text ?? ''}</Text>
      <View style={commonStyles.placeAtTheEnd}>
        <Icon
          onPress={likeOrUnlike}
          name={`cards-heart${postItem.likedByMe ? '' : '-outline'}`} // '' means the heart is full
          color={colors.primary.dark}
          size={25}
        />
        <Text style={commonStyles.caption}>{postItem.likesCount}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default Post;
