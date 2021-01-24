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
    <View style={styles.cartButtonContainer}>
      <TextInput
        style={styles.TextInputStyle}
        placeholder="Let's share something with us..."
        placeholderTextColor="#fff"
        onChangeText={(value) => setText(value)}
        value={text}></TextInput>

      <Icon name="share-outline" color="#fff" size={30} onPress={sharePost} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fb8c0025',
    justifyContent: 'space-between',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
  },

  input: {
    backgroundColor: 'white',
    flex: 1,
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },

  cartButtonContainer: {
    flexDirection: 'row',
    backgroundColor: '#ea8331',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    top: 0,
    padding: 20,
  },
  TextInputStyle: {
    flex: 1,
    fontSize: 17,
    color: '#fff',
    backgroundColor: '#eceff125',
    borderRadius: 10,
    marginRight: 5,
    paddingLeft: 10,
  },
  cartIcon: {
    width: 45,
    height: 45,
    tintColor: 'white',
  },
});
