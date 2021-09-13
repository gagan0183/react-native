import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [openText, setOpenText] = useState('Open up App.js to start working on your app!');
  return (
    <View style={styles.container}>
      <Text>{openText}</Text>
      <Button title="Change button text" onPress={() => setOpenText('The text has changes')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
