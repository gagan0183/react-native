import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const GoalInput = props => {
    return (
        <TextInput placeholder="Create Goal" style={styles.textInput} onChangeText={props.textEntered} />
    )
};

const styles = StyleSheet.create({
    textInput: { 
        flex: 1,
        borderBottomColor: 'black', 
        borderBottomWidth: 1, 
        padding: 10 
    }
});

export default GoalInput;