import database from '@react-native-firebase/database';
import {useEffect, useState} from 'react';
import type {Post} from '../types/firebase';

export const usePostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    database()
      .ref('posts')
      .orderByChild('updatedAt')
      .on(
        'value',
        snapShot => {
          const postsValue: Post[] = [];
          snapShot.forEach(child => {
            postsValue.unshift({...child.val(), id: child.key});
            return undefined;
          });
          setPosts(postsValue);
        },
        err => {
          console.error(err);
        },
      );

    return () => database().ref('posts').off();
  }, []);

  return posts;
};
