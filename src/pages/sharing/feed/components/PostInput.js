import React, {useState} from 'react';

import {View, TextInput, Button, StyleSheet} from 'react-native';

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
      <Button title="Share" onPress={sharePost} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },

  input: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
});
