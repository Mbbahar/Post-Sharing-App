import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

import React, {useState, useEffect} from 'react';

import {Button, FlatList, SafeAreaView} from 'react-native';

import {PostInput, PostItem} from './components';

export function Saved({navigation}) {
  const [postArray, setPostArray] = useState([]);
  useEffect(() => {
    database()
      .ref(`${auth().currentUser.uid}`)
      .on('value', (snapshot) => {
        const data = snapshot.val();
        if (!data) {
          return;
        }
        setPostArray(Object.values(data));
        console.log(Object.values(data))
      });
  }, []);

  const renderPost = ({item}) => <PostItem item={item} />;


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
      <Button title="Sign Out" onPress={_signOut} />
    </SafeAreaView>
  );
}
