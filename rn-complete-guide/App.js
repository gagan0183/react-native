import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={{borderBottomColor: 'black', borderBottomWidth: 1, padding: 30}}>
      <TextInput />
      <Button title="Create Goal" />
    </View>
  );
}

const styles = StyleSheet.create({
  
});
