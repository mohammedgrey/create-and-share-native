import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import type {Post as PostInterface, TextPost} from '../../types/firebase';
import styles from './styles';

const Post: React.FC<{post: PostInterface & TextPost}> = ({post}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text>{post?.text ?? ''}</Text>
    </TouchableOpacity>
  );
};
export default Post;
