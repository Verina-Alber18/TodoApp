import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';
import Sandbox from './components/sandbox';

export default function App() {
  const [todos, setTodos] = useState([
   { text: 'Listen to Music', key:'1' },
   { text: 'Creating an App', key:'2' },
   { text: 'Playing', key:'3' },
  ])

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    });
  }

  const submitHandler = (text) => {
    //Lesson 12: Alerts
    if(text.length < 3){
      Alert.alert('OOPS!', 'Todos must be at least 3 chars',[
        {text:'understood', onPress:() => console.log('alert closed')}
      ]);
    }
    else{
      setTodos((prevTodos) => {
        return [
          { text: text, key: Math.random().toString() },
          ...prevTodos
        ]
      });
    }
    
  }

  return (
    // Lesson 14: Flexbox Basics
    // flex properties control how it's being displayed on the screen and it won't ever be pushed off the screen at the bottom.
    //<Sandbox />


    // Lesson 13: Dissmissing Keyboard 
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss()
      console.log('dissmised keyboard')
    }}>
      <View style={styles.container}>
        {/* Header */}
        <Header/>
        <View style={styles.content}>
          {/* Todo Form */}
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1,
  },
});
