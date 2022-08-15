import React from 'react';
import {FlatList, View} from 'react-native';
import PostItem from '../../components/Post';
import {usePostList} from '../../hooks/usePostList';
import type {Post, TextPost} from '../../types/firebase';
import styles from './styles';

const HomeScreen = () => {
  const posts = usePostList();
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={item => item.id}
        renderItem={({item}) => <PostItem post={item as TextPost & Post} />}
      />
    </View>
  );
};
export default HomeScreen;
