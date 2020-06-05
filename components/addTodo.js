import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, Button, Keyboard } from 'react-native';

export default function addTodo({ submitHandler }) {
    const [text, setText] = useState();

    const changeHandler = (value) => {
        setText(value);
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='new Todo...'
                onChangeText={changeHandler}
            />
            <Button onPress={() => {submitHandler(text); Keyboard.dismiss()}} title='Add Todo' color='coral' />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    }
});