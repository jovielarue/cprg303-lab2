/*
/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import ToDoList from './src/components/ToDoList';
import ToDoForm from './src/components/ToDoForm';
import {useState} from 'react';

function App() {
  const [tasks, setTasks] = useState([
    'Go to the gym',
    'Walk the dog',
    'Do homework for mobile app dev',
  ]);

  const addTask = task => {
    setTasks([...tasks, task]);
  };

  return (
    <SafeAreaView>
      <ToDoList tasks={tasks} setTasks={setTasks} />
      <ToDoForm tasks={tasks} addTask={addTask} />
    </SafeAreaView>
  );
}

export default App;
