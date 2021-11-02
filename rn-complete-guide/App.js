import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';
import GoalInput from './Components/GoalInput';
import GoalItem from './Components/GoalItem';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState(null);
  const [goals, setGoals] = useState([]);

  const textEntered = (text) => {
    setEnteredGoal(text);
  }

  const add = () => {
    setGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: enteredGoal }]);
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <GoalInput textEntered={textEntered}/>
        <Button title="ADD" onPress={add} />
      </View>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={goals}
        renderItem={itemData => <GoalItem item={itemData.item.value}/>}
      />
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
});
