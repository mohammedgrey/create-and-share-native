import {useEffect, useMemo, useState} from 'react';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import type {Post, PostItem, PostInput, Like} from '../types/firebase';
import {extractUsernameFromEmail} from '../utils/helpers';

export const usePostItem = (item: Post) => {
  const initialItem = useMemo(
    () => ({
      ...item,
      likesCount: Object.keys(item.likes || {}).length,
      likedByMe: !!item.likes?.[auth().currentUser?.uid ?? ''],
      myPost: item.ownerId === auth().currentUser?.uid,
    }),
    [item],
  );
  const [post, setPost] = useState<Post & PostItem>(initialItem);

  //Update the post each time the item changes
  useEffect(() => {
    setPost(initialItem);
  }, [initialItem]);

  const like = (): Promise<void> => {
    console.log(`You liked post ${post.id}`);

    const userId = auth().currentUser?.uid;
    if (!userId) {
      return Promise.resolve();
    }

    const userName = extractUsernameFromEmail(auth().currentUser?.email ?? '');

    const likeObj: Like = {
      ownerId: userId,
      ownerName: userName,
      createdAt: Date.now(),
    };
    return database()
      .ref('posts')
      .child(post.id)
      .child('likes')
      .child(userId)
      .set(likeObj)
      .then(() => {
        // Update post locally
        setPost({
          ...post,
          likes: {
            ...post.likes,
            [userId]: likeObj,
          },
          likedByMe: true,
          likesCount: post.likesCount + 1,
        });
      });
  };

  const unlike = (): Promise<void> => {
    console.log(`You unliked post ${post.id}`);

    const userId = auth().currentUser?.uid;
    if (!userId) {
      return Promise.resolve();
    }

    return database()
      .ref('posts')
      .child(post.id)
      .child('likes')
      .child(userId)
      .set(null)
      .then(() => {
        // Update post locally
        const likes = post.likes;
        delete likes[userId];
        setPost({
          ...post,
          likes,
          likedByMe: false,
          likesCount: post.likesCount - 1,
        });
      });
  };

  const likeOrUnlike = post.likedByMe ? unlike : like;

  const updatePost = (input: PostInput): Promise<void> => {
    const userId = auth().currentUser?.uid;

    if (!userId || post.ownerId !== userId) {
      return Promise.resolve();
    }

    return database()
      .ref('posts')
      .child(post.id)
      .update(input)
      .then(() => {
        setPost({
          ...post,
          ...input,
        });
      });
  };

  return {
    post,
    like,
    unlike,
    likeOrUnlike,
    updatePost,
  };
};
