import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

import React, {useState, useEffect} from 'react';

import {Button, FlatList, SafeAreaView} from 'react-native';

import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';


export function Feed() {
  const [todoArray, setTodoArray] = useState([]);
  const [UserName,setUserName]=useState('');
  const [UserEmail,setUserEmail]=useState('');
 /* useEffect(()=>{
    const name=`${auth().currentUser.email}`.split('@')
    //setUserName(name[0])
    console.log(name[0]);
  },[])*/

  useEffect(() => {
    database()
      .ref(`${auth().currentUser.uid}`)
      .on('value', (snapshot) => {
        const data = snapshot.val();

        if (!data) {
          return;
        }
        setTodoArray(Object.values(data));
      });
  }, []);

  const renderTodo = ({item}) => <TodoItem item={item} />;

  function addTodo(todo) {
    const name=`${auth().currentUser.email}`.split('@')
    const now = new Date();
    const offsetMs = now.getTimezoneOffset() * 60 * 1000;
    const dateLocal = new Date(now.getTime() - offsetMs);
    const str = dateLocal.toISOString().slice(0, 19).replace(/-/g, "").replace("T", "").replace(/:/g,"");
    database()
      .ref(`${auth().currentUser.uid}`)
      .push({id: name[0],createdTime:str, text: todo});
  }

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={todoArray}
        renderItem={renderTodo}
      />

      <TodoInput onAdd={addTodo} />
      <Button title="Çıkış Yap" onPress={() => auth().signOut()} />
    </SafeAreaView>
  );
}