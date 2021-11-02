import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState(null);
  const [goals, setGoals] = useState([]);

  const textEntered = (text) => {
    setEnteredGoal(text);
  }

  const add = () => {
    setGoals(currentGoals => [...currentGoals, enteredGoal]);
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Create Goal" style={styles.textInput} onChangeText={textEntered} />
        <Button title="ADD" onPress={add} />
      </View>
      <ScrollView>
        {goals.map(goal => <View key={goal} style={styles.listItem}><Text>{goal}</Text></View>)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: { 
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center' 
  },
  textInput: { 
    flex: 1,
    borderBottomColor: 'black', 
    borderBottomWidth: 1, 
    padding: 10 
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});
