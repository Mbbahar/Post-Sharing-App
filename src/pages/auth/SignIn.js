import React, {useState, useEffect} from 'react';
import {ScrollView, KeyboardAvoidingView, View, Alert} from 'react-native';
import {FormComponent} from './components/FormComponent';
import {form_component} from './styles/form_style';
import {useSign} from './hooks';
import {Loading} from '../../components';

function SignIn(props) {
  const [UserEmail, setUserEmail] = useState('');
  const [UserPassword, setUserPassword] = useState('');
  const {loading, error, response, signUp, login} = useSign();

  function _login() {
    login(UserEmail, UserPassword);
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
    <ScrollView>
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
