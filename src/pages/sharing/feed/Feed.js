import React, {useState, useEffect} from 'react';
import {Button, FlatList, SafeAreaView} from 'react-native';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import {PostInput, PostItem} from './components';
import {useTimeFormat} from '../../../hooks';

export function Feed({navigation}) {
  const [postArray, setPostArray] = useState([]);
  const {timeFormatting} = useTimeFormat();

  useEffect(() => {
    database()
      .ref('/posts/')
      .on('value', (snapshot) => {
        const data = snapshot.val();
        if (!data) {
          return;
        }
        setPostArray(Object.values(data));
      });
  }, []);

  const renderPost = ({item}) => <PostItem item={item} />;

  function addPost(post) {
    const name = `${auth().currentUser.email}`.split('@');
    const time_str = timeFormatting();
    database()
      .ref('/posts/')
      .push({id: name[0], createdTime: time_str, text: post});
  }

  function _signOut() {
    auth().signOut();
    navigation.navigate('SignIn');
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={postArray}
        renderItem={renderPost}
      />

      <PostInput onAdd={addPost} />
      <Button title="Sign Out" onPress={_signOut} />
    </SafeAreaView>
  );
}
