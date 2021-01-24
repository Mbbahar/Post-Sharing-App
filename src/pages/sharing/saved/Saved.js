import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import React, {useState, useEffect} from 'react';
import {Text, FlatList, SafeAreaView, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {SavedItem, EmptyList} from './components';
import {saved_screen} from '../styles/saved_style';

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
        setPostArray(
          Object.values(data).sort((a, b) =>
            a.createdTime < b.createdTime
              ? 1
              : b.createdTime < a.createdTime
              ? -1
              : 0,
          ),
        );
      });
  }, []);

  const renderPost = ({item}) => <SavedItem item={item} />;

  function _signOut() {
    auth().signOut();
    navigation.navigate('SignIn');
    setPostArray([]);
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={saved_screen.header_container}>
        <Text style={saved_screen.text}>Saved</Text>
        <Icon
          name="exit-outline"
          size={30}
          onPress={_signOut}
          style={saved_screen.icon}
        />
      </View>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={postArray}
        renderItem={renderPost}
        ListEmptyComponent={EmptyList}
      />
    </SafeAreaView>
  );
}
