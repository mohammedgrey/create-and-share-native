import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TABS} from '../../navigation/config';
import Button from '../Button';

const AddPostButton = () => {
  const navigation = useNavigation();
  return (
    <Button
      onPress={() => {
        navigation.navigate(TABS.POST_MODAL as never, {} as never);
      }}>
      {'Create New'}
    </Button>
  );
};
export default AddPostButton;
