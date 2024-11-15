import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MainLayout from '../layouts/MainLayout';

export default function HomeScreen({navigation}) {
  const [tasks, setTasks] = useState([
    'Go to the gym',
    'Walk the dog',
    'Do homework for mobile app dev',
  ]);

  const addTask = task => {
    setTasks([...tasks, task]);
  };

  return (
    <MainLayout>
      <View style={styles.mainView}>
        <ToDoList tasks={tasks} setTasks={setTasks} />
        <ToDoForm tasks={tasks} addTask={addTask} />
      </View>
      <TouchableOpacity
        style={styles.navBtn}
        onPress={() => navigation.navigate('About')}>
        <Text style={styles.navText}>Go to About</Text>
      </TouchableOpacity>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  navBtn: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    margin: 20,
    alignSelf: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'pink',
  },
  navText: {
    fontWeight: '500',
    color: 'black',
  },
});
