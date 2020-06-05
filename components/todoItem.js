import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

export default function todoItem({ item, pressHandler }) {
    return (
        <TouchableOpacity onPress= {() => pressHandler(item.key)} >
            <View style={styles.item}>
                {/* Lesson 15: Icons & More Flexbox  USING:
                    "https://docs.expo.io/guides/icons/?redirected" , "https://icons.expo.fyi/" */}
                <MaterialIcons name="delete" size={24} color="black" />
                <Text style={styles.itemText}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderRadius: 10,
        borderStyle: 'dashed',
        flexDirection: 'row',
    },
    itemText: {
        marginLeft: 10,
    },
});
