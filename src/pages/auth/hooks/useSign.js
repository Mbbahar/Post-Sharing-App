import {useState} from 'react';
import auth from '@react-native-firebase/auth';
import wait from 'waait';

export function useSign() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  async function signUp(email, password) {
    setError(null);
    setLoading(true);
    await wait(2000);
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((serverResponse) => {
        setLoading(false);
        setResponse(serverResponse);
      })
      .catch((serverError) => {
        setLoading(false);
        setError(serverError);
      });
  }

  async function login(email,password) {
    setError(null);
    setLoading(true);
    await wait(2000);
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((serverResponse) => {
        setLoading(false);
        setResponse(serverResponse);
      })
      .catch((serverError) => {
        setLoading(false);
        setError(serverError);});
  }

  return {loading, error, response, signUp, login};
}