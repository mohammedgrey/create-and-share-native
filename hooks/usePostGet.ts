import database from '@react-native-firebase/database';
import {useEffect, useState} from 'react';
import type {Post} from '../types/firebase';
import {createEmptyTextPost} from '../utils/helpers';

export const usePostGet = (postId: string) => {
  const [post, setPost] = useState<Post>(createEmptyTextPost());

  useEffect(() => {
    database()
      .ref('posts')
      .child(postId)
      .on(
        'value',
        snapShot => {
          setPost({...snapShot.val(), id: snapShot.key});
        },
        err => {
          console.error(err);
        },
      );

    return () => database().ref('posts').child(postId).off();
  }, [postId]);

  return post;
};
