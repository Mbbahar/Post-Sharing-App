import React, {useState, useEffect} from 'react';
import {ScrollView, KeyboardAvoidingView, View, Alert} from 'react-native';
import {FormComponent} from './components/FormComponent';
import {form_component} from './styles/form_style';
import {useSign} from './hooks';
import {Loading} from '../../components';
import auth from '@react-native-firebase/auth';

function SignIn(props) {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const {loading, error, response, signUp, login} = useSign();

  function _login() {
    login(userEmail, userPassword);
  }

  useEffect(() => {
    if (response) {
      props.navigation.navigate('SharingStack');
    }
  }, [response, loading]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    Alert.alert('SignIn Error', error.message);
  }

  return (
    <ScrollView style={form_component.keyboard_view}>
      <KeyboardAvoidingView
        style={form_component.keyboard_view}
        keyboardVerticalOffset={10}
        behavior={'position'}>
        <View style={form_component.container}>
          <View style={form_component.box}>
            <FormComponent
              setEmail={setUserEmail}
              setPassword={setUserPassword}
              onPress={_login}
              button_text="SignIn"
              onNavigateText="New user? Join here"
              onNavigatePress={() => props.navigation.navigate('SignUp')}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
export {SignIn};
