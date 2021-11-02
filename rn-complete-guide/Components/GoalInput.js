import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState(null);

    const textEntered = (text) => {
        setEnteredGoal(text);
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput placeholder="Create Goal" style={styles.textInput} onChangeText={textEntered} />
            <Button title="ADD" onPress={() => props.onAddGoal(enteredGoal)} />
        </View>
    )
};

const styles = StyleSheet.create({
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
    }
});

export default GoalInput;