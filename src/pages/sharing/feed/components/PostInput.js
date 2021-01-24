import React, {useState} from 'react';

import {View, TextInput, Button, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
export function PostInput({onAdd}) {
  const [text, setText] = useState('');

  const sharePost = () => {
    onAdd(text);
    setText('');
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Write something.."
        style={styles.input}
        onChangeText={(value) => setText(value)}
        value={text}
      />
      <Icon name="share-outline" color='#ea8331' size={30} onPress={sharePost} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e0e0e0',
    justifyContent:'space-between',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    flexDirection:'row',
    alignItems:'center',
  },

  input: {
    backgroundColor: 'white',
    flex:1,
    padding: 10,
    margin:10,
    borderRadius: 5,
  },
});
