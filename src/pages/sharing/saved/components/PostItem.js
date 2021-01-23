import React from 'react';

import {View,Text, StyleSheet} from 'react-native';

import moment from 'moment';

export function PostItem({item}) {
  return (
    <View style={styles.container}>
      <View style={styles.contHeader}>
      <Text>{item.item.id}</Text>
      <Text style={styles.contDate}>{moment(item.item.createdTime,"YYYYMMDD,h:mm:ss").fromNow()}</Text>
        </View>
      <Text>{item.item.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius:10,
    borderWidth:1,
    borderColor:'gray',
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
  },
  contHeader:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    borderBottomWidth:1,
    borderColor:'orange'
  },
  contDate:{
    fontSize:10,
  }
});