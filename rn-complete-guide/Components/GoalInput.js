import React, { useState } from 'react';
import { Button, Modal, StyleSheet, Text, TextInput, View } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState(null);

    const textEntered = (text) => {
        setEnteredGoal(text);
    }

    const onAddHandler = () => {
        if (enteredGoal !== '') {
            props.onAddGoal(enteredGoal);
            setEnteredGoal('');    
        }
    }

    const onCancelHandler = () => {
        props.onCancelHandler();
        setEnteredGoal('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput placeholder="Create Goal" style={styles.textInput} onChangeText={textEntered} value={enteredGoal} />
                <Button title="CANCEL" color="red" onPress={() => onCancelHandler()} />
                <Button title="ADD" onPress={() => onAddHandler()} />
            </View>
        </Modal>
    )
};

const styles = StyleSheet.create({
    inputContainer: { 
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    textInput: { 
        width: '80%',
        borderBottomColor: 'black', 
        borderBottomWidth: 1, 
        padding: 10 
    }
});

export default GoalInput;