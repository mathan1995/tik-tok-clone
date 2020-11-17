import React from 'react';
import {StyleSheet, FlatList, View, Dimensions} from 'react-native';
import Post from '../../components/Post';
import postsdata from '../Mocks/index';

const index = () => {
  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={postsdata}
        renderItem={({item}) => <Post post={item} />}
        snapToInterval={Dimensions.get('window').height - 70}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
      />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
