import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const GoalItem = props => {

    return (
        <TouchableOpacity onPress={() => props.onDeleteItem(props.item)}>
            <View style={styles.listItem}>
                <Text>{props.item.value}</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    }
});

export default GoalItem;