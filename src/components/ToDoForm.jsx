import React from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native';
import {useState} from 'react';

export default function ToDoForm({tasks, setTasks}) {
  const [newTask, setNewTask] = useState('');
  console.log(tasks);

  const handleAdd = () => {
    setTasks([...tasks, newTask]);
  };

  return (
    <>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          onChangeText={text => setNewTask(text)}
          placeholder="Add a new task..."
        />
        <Button title="Add" onPress={handleAdd} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});
