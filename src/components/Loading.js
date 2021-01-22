import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import LottieView from 'lottie-react-native';

export function Loading() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <LottieView
        style={{flex: 1}}
        autoPlay
        source={require('../assets/loading.json')}
      />
      <Text style={{color: '#ea8331', fontWeight: 'bold', fontSize:20}}>Loading...</Text>
    </SafeAreaView>
  );
}