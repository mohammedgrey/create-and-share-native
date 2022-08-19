import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {usePostCreate} from '../../hooks/usePostCreate';
import type {Post, PostInput, TextPost} from '../../types/firebase';
import {PostType} from '../../types/firebase';
import Button from '../Button';
import styles from './styles';

const PostModal: React.FC<{
  route: any;
}> = ({route}) => {
  const createPost = usePostCreate();
  const navigation = useNavigation();

  const {
    post,
    updatePost,
  }: {post?: Post; updatePost: (input: PostInput) => Promise<void>} =
    route.params;

  const [text, setText] = useState((post as TextPost)?.text || '');

  //Create or Update Handler
  const handleAddUpdatePost = () => {
    const createOrUpdate = post ? updatePost : createPost;
    createOrUpdate({
      type: PostType.TEXT_POST,
      text,
    });
    navigation.goBack();
  };

  //Set the header title
  useEffect(() => {
    navigation.setOptions({
      headerTitle: post ? 'Update Creation' : 'Create New',
    });
  }, [navigation, post]);

  return (
    <View style={styles.container}>
      <Text>{`${post ? 'Update' : 'Create'} your post here...`}</Text>
      <TextInput
        multiline
        style={styles.input}
        value={text}
        onChange={event => setText(event.nativeEvent.text)}
      />
      <Button disabled={!text} onPress={handleAddUpdatePost}>
        {post ? 'Update' : 'Share'}
      </Button>
    </View>
  );
};
export default PostModal;
