import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import type {Post, PostInput} from '../types/firebase';
import {extractUsernameFromEmail} from '../utils/helpers';

export const usePostCreate = () => {
  const createPost = (input: PostInput) => {
    const currentUser = auth().currentUser;
    const userId = currentUser?.uid;
    const userName = extractUsernameFromEmail(currentUser?.email ?? '');

    if (!userId) {
      return;
    }

    const post: Omit<Post, 'id'> = {
      ...input,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      ownerId: userId,
      ownerName: userName,
      likes: {},
    };

    database().ref('posts').push(post);
  };

  return createPost;
};
