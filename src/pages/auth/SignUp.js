import React, {useState, useEffect} from 'react';
import {ScrollView, KeyboardAvoidingView, View, Alert} from 'react-native';
import {Loading} from '../../components';
import {useSign} from './hooks';
import {FormComponent} from './components/FormComponent';
import {form_component} from './styles/form_style';

function SignUp(props) {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const {loading, error, response, signUp, login} = useSign();

  function _signUp() {
    signUp(userEmail, userPassword);
  }
  useEffect(() => {
    if (response) {
      props.navigation.navigate('SignIn');
    }
  }, [response, loading]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    Alert.alert('SignUp Error', error.message);
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
              button_text="SignUp"
              onPress={_signUp}
              onNavigateText="Have you account? SignIn"
              onNavigatePress={() => props.navigation.navigate('SignIn')}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export {SignUp};
