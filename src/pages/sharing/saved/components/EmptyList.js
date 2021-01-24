import React from 'react'
import {SafeAreaView, Text} from 'react-native';
import LottieView from 'lottie-react-native';
import {empty_list} from '../../styles/feed_style';

function EmptyList() {
  return (
    <SafeAreaView>
      <LottieView
        style={empty_list.lottie}
        autoPlay
        source={require('../../../../assets/animations/empty.json')}
      />
      <Text style={empty_list.text}>
        There was always mulberry around here...
      </Text>
    </SafeAreaView>
  );
}
export {EmptyList};
