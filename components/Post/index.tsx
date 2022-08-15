import React from 'react';
import {TouchableOpacity} from 'react-native';
import type {Post as PostInterface, TextPost} from '../../types/firebase';
import styles from './styles';

const Post: React.FC<{post: PostInterface & TextPost}> = ({post}) => {
  return (
    <TouchableOpacity style={styles.container}>
      {post?.text ?? ''}
    </TouchableOpacity>
  );
};
export default Post;
