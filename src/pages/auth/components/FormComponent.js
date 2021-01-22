import React, {useState} from 'react';
import {View, Image, TextInput, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {form_component} from '../styles/form_style';

function FormComponent({
  setEmail,
  setPassword,
  onPress,
  button_text,
  onNavigateText,
  onNavigatePress,
}) {
  const [isShowing, setShowing] = useState(false);
  return (
    <View>
      <Image
        source={require('../../../assets/logo.png')}
        style={form_component.logo}
      />
      <TextInput
        style={form_component.TextInputStyle}
        placeholder="E-Mail"
        keyboardType="email-address"
        placeholderTextColor="#bdbdbd"
        onChangeText={(email) => setEmail(email)}></TextInput>

      <View style={form_component.TextInputStyle}>
        <TextInput
          placeholder="Password"
          placeholderTextColor="#bdbdbd"
          secureTextEntry={isShowing ? false : true}
          onChangeText={(password) => setPassword(password)}
          style={{flex: 1}}></TextInput>
        <Icon
          onPress={() => (isShowing ? setShowing(false) : setShowing(true))}
          style={form_component.text_input_icon}
          size={20}
          name={isShowing ? 'eye-off' : 'eye'}></Icon>
      </View>

      <TouchableOpacity style={form_component.button} onPress= {onPress}>
        <Text style={form_component.buttonText}>{button_text}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={form_component.navButton}
        onPress={onNavigatePress}>
        <Text style={form_component.navButtonText}>{onNavigateText}</Text>
      </TouchableOpacity>
    </View>
  );
}
export {FormComponent};
