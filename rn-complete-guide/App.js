import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={{padding: 50}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <TextInput placeholder="Create Goal" style={{borderBottomColor: 'black', borderBottomWidth: 1, padding: 10}} />
        <Button title="ADD" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
});
