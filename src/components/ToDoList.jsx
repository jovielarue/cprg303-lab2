import React, {useState} from 'react';
import {ScrollView, Text, StyleSheet, Pressable, View} from 'react-native';

export default function ToDoList({tasks, setTasks}) {
  return (
    <>
      <ScrollView>
        {tasks.map((task, index) => {
          return (
            <Task
              taskName={task}
              key={index}
              setTasks={setTasks}
              tasks={tasks}
            />
          );
        })}
      </ScrollView>
    </>
  );
}

function Task({taskName, setTasks, tasks}) {
  const [completed, setCompleted] = useState(false);

  return (
    <Pressable onPress={() => setCompleted(!completed)}>
      <View style={[styles.task, completed ? styles.completed : null]}>
        <Text style={styles.taskText}>{taskName}</Text>
        <Pressable
          onPress={() =>
            setTasks(
              tasks.filter(task => {
                return task !== taskName;
              }),
            )
          }>
          <Text style={styles.deleteBtn}>delete</Text>
        </Pressable>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 20,
    maxWidth: '75%',
  },
  deleteBtn: {
    fontSize: 15,
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 2,
    backgroundColor: 'hotpink',
    color: 'black',
  },
});
