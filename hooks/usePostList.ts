import database from '@react-native-firebase/database';
import {useEffect, useState} from 'react';
import type {Post} from '../types/firebase';

export const usePostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    database()
      .ref('posts')
      .on(
        'value',
        snapShot => {
          const val = Object.entries(
            (snapShot.val() || {}) as Record<string, Post>,
          ).map(([id, post]) => ({...post, id}));
          setPosts(val);
        },
        err => {
          console.error(err);
        },
      );

    return () => database().ref('posts').off();
  }, []);

  return posts;
};
