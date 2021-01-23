import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import 'moment/locale/tr';

export function PostItem({item, onSaved}) {
  return (
    <View style={styles.container}>
      <View style={styles.contHeader}>
        <Text>{item.id}</Text>
        <Text style={styles.contDate}>
          {moment(item.createdTime, 'YYYYMMDD,h:mm:ss').locale('tr').fromNow()}
        </Text>
      </View>
      <Text>{item.text}</Text>
      <Icon name="save-outline" onPress={onSaved} size={25} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
  },
  contHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: 'orange',
  },
  contDate: {
    fontSize: 10,
  },
});