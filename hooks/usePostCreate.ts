import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import type {Post, PostInput} from '../types/firebase';

export const usePostCreate = () => {
  const createPost = (input: PostInput) => {
    const userId = auth().currentUser?.uid;

    if (!userId) {
      return;
    }

    const post: Omit<Post, 'id'> = {
      ...input,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      ownerId: userId,
      likes: {},
    };

    database().ref('posts').push(post);
  };

  return createPost;
};
