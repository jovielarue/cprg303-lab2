import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import MainLayout from '../layouts/MainLayout';

export default function AboutScreen() {
  const currentDate = new Date().toLocaleDateString();
  const [easterEgg, setEasterEgg] = useState(false);

  return (
    <MainLayout>
      <View style={styles.mainView}>
        <Text style={styles.heading}>TodoList</Text>
        <TouchableOpacity onPress={() => setEasterEgg(!easterEgg)}>
          <Text style={styles.myName}>This app was made by Jovie.</Text>
        </TouchableOpacity>
        <Text>{currentDate}</Text>
        {easterEgg && <Text style={styles.myName}>Surprise!</Text>}
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  mainView: {
    alignItems: 'center',
    gap: 20,
    height: '100%',
    width: '100%',
    padding: 50,
  },
  heading: {
    fontSize: 30,
    fontWeight: '600',
    color: 'hotpink',
  },
  myName: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
});
