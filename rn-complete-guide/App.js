import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalInput from './Components/GoalInput';
import GoalItem from './Components/GoalItem';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const add = (goal) => {
    setGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: goal }]);
    setIsAddMode(false);
  }
  
  const onCancelHandler = () => {
    setIsAddMode(false);
  }

  const deleteItem = (goalId) => {
    setGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  }

  return (
    <View style={styles.screen}>
      <Button title='Add New Goal' onPress={() => setIsAddMode(true)}/>
      <GoalInput visible={isAddMode} onAddGoal={add} onCancelHandler={onCancelHandler}/>
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
