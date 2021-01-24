import React from 'react';
import {View, Text} from 'react-native';
import moment from 'moment';
import 'moment/locale/tr';
import {saved_item} from '../../styles/saved_style'

export function SavedItem({item}) {
  return (
    <View style={saved_item.container}>
      <View style={saved_item.contHeader}>
        <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 15}}>
          {item.item.id}
        </Text>
        <Text style={saved_item.contDate}>
          {moment(item.item.createdTime, 'YYYYMMDD,h:mm:ss')
            .locale('tr')
            .fromNow()}
        </Text>
      </View>
      <View style={saved_item.contMessage}>
        <Text style={{flex: 1}}>{item.item.text}</Text>
      </View>
    </View>
  );
}

