import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {post_input} from '../../styles/feed_style';

export function PostInput({onAdd}) {
  const [text, setText] = useState('');

  const sharePost = () => {
    onAdd(text);
    setText('');
  };
  return (
    <View style={post_input.cartButtonContainer}>
      <TextInput
        style={post_input.TextInputStyle}
        placeholder="Let's share something with us..."
        placeholderTextColor="#fff"
        onChangeText={(value) => setText(value)}
        value={text}></TextInput>
      <TouchableOpacity onPress={sharePost}>
        <Icon name="send" color="#fff" size={30} />
      </TouchableOpacity>
    </View>
  );
}
