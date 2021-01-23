import React, {useState} from 'react';

import {View, TextInput, Button, StyleSheet} from 'react-native';

export function PostInput({onAdd,placeholdertext}) {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholdertext}
        style={styles.input}
        onChangeText={(value) => setText(value)}
      />
      <Button title="Share" onPress={() => onAdd(text)} />
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
