import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import axios from 'axios';

export const HomeScreen = () => {
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos/1').then(response => {
      console.log(response.data);
    });
  });
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
  },
  title: {
    color: 'white',
    fontSize: 30,
  },
});
