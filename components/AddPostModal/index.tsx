import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {usePostCreate} from '../../hooks/usePostCreate';
import type {TextPost} from '../../types/firebase';
import {PostType} from '../../types/firebase';
import Button from '../Button';
import styles from './styles';

const PostModal: React.FC<{
  route: any;
}> = ({route}) => {
  const createPost = usePostCreate();
  const navigation = useNavigation();
  const {post}: {post?: TextPost} = route.params;
  const [text, setText] = useState(post?.text || '');

  const handleAddPost = () => {
    createPost({
      type: PostType.TEXT_POST,
      text,
    });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text>Create your post here...</Text>
      <TextInput
        multiline
        style={styles.input}
        value={text}
        onChange={event => setText(event.nativeEvent.text)}
      />
      <Button disabled={!text} onPress={handleAddPost}>
        Share
      </Button>
    </View>
  );
};
export default PostModal;
