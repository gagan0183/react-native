import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalInput from './Components/GoalInput';
import GoalItem from './Components/GoalItem';

export default function App() {
  const [goals, setGoals] = useState([]);

  const add = (goal) => {
    setGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: goal }]);
  }

  const deleteItem = (item) => {
    const newGoals = goals.filter(goal => goal.id !== item.id);
    setGoals(newGoals);
  }

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={add}/>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={goals}
        renderItem={itemData => <GoalItem item={itemData.item} onDeleteItem={deleteItem}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
});
