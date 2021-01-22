import React from 'react';

import moment from 'moment';

import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

export default function TodoItem({item}) {
  return (
    <View style={styles.container}>
      <View style={{borderBottomWidth:1,borderColor:'orange'}}>
      <Text>{item.id}</Text>
        </View>
      <Text>{item.text}</Text>
      <Text>{moment(item.createdTime,"YYYYMMDD,h:mm:ss").fromNow()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth:1,
    borderColor:'gray',
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
  },
});