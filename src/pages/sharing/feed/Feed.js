import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

import React, {useState, useEffect} from 'react';

import {Button, FlatList, SafeAreaView} from 'react-native';

import {useTimeFormat} from '../../../hooks';

import {PostInput, PostItem} from './components';

export function Feed({navigation}) {
  const [postArray, setPostArray] = useState([]);
  const {timeFormatting} = useTimeFormat();
  const [placeholderText,setPlaceHolderText]=useState('Write Something');
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

  const renderPost = ({item}) => <PostItem item={item} onSaved={()=>{
    database()
    .ref(`${auth().currentUser.uid}`)
    .push({item});

  }}
   />;


  function addPost(post) {
    setPlaceHolderText(' ');
    const name = `${auth().currentUser.email}`.split('@');
    const time_str = timeFormatting();
    database()
      .ref('/posts/')
      .push({id: name[0], createdTime: time_str, text: post});
  }

  

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={postArray}
        renderItem={renderPost}
      />
      <PostInput onAdd={addPost} placeholdertext={placeholderText} />
    </SafeAreaView>
  );
}
