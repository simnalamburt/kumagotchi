// @flow
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, Image, View } from 'react-native';

const kumagotchi = () => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
      쿠마고치
    </Text>
    <Text style={styles.instructions}>
      ㅇㅅㅇ)b
    </Text>
    <Image
      source={{uri: 'http://pds13.egloos.com/pds/200903/03/32/f0072332_49acb81808bea.jpg'}}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eeeeee',
  },
  welcome: {
    fontSize: 40,
    fontWeight: '700',
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('kumagotchi', _ => kumagotchi);
