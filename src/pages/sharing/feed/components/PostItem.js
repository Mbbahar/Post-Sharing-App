import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import 'moment/locale/tr';
import { post_item } from '../../styles/feed_style'

export function PostItem({item, onSaved}) {
  return (
    <View style={post_item.container}>
      <View style={post_item.contHeader}>
        <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 15}}>
          {item.id}
        </Text>
        <Text style={post_item.contDate}>
          {moment(item.createdTime, 'YYYYMMDD,h:mm:ss').locale('tr').fromNow()}
        </Text>
      </View>
      <View style={post_item.contMessage}>
        <Text style={{flex: 1}}>{item.text}</Text>
        <TouchableOpacity onPress={onSaved}>
          <Icon name="bookmark-outline" size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

