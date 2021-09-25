import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View>
      <TextInput placeholder="Create Goal" style={{borderBottomColor: 'black', borderBottomWidth: 1, padding: 30}} />
      <Button title="ADD" />
    </View>
  );
}

const styles = StyleSheet.create({
  
});
