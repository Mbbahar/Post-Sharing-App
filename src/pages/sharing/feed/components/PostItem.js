import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import 'moment/locale/tr';

export function PostItem({item, onSaved}) {
  return (
    <View style={styles.container}>
      <View style={styles.contHeader}>
        <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 15}}>
          {item.id}
        </Text>
        <Text style={styles.contDate}>
          {moment(item.createdTime, 'YYYYMMDD,h:mm:ss').locale('tr').fromNow()}
        </Text>
      </View>
      <View style={styles.contMessage}>
        <Text style={{flex: 1}}>{item.text}</Text>
        <Icon name="bookmark-outline" onPress={onSaved} size={20} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,

    backgroundColor: 'white',
    margin: 10,
    elevation: 10,
  },
  contHeader: {
    flex: 1,
    backgroundColor: '#fb8c00',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopRightRadius: 20,
    padding: 5,
  },
  contMessage: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  contDate: {
    fontSize: 10,
    color: '#fff',
  },
});
