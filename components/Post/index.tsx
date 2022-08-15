import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import type {Post as PostInterface, TextPost} from '../../types/firebase';
import {formatDateWithTime} from '../../utils/helpers';
import styles from './styles';

const Post: React.FC<{post: PostInterface & TextPost}> = ({post}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.name}>{post?.ownerName ?? ''}</Text>
      <Text style={styles.date}>
        {formatDateWithTime(new Date(post?.createdAt ?? '')) ?? ''}
      </Text>
      <Text style={styles.text}>{post?.text ?? ''}</Text>
    </TouchableOpacity>
  );
};
export default Post;
