import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Todays's Task</Text>
        <View style={styles.itemsWrapper}>

        </View>
      </View>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper:{
    paddingTop:60,
    paddingHorizontal:20 
  },
  sectionTitle:{
    fontSize:24,
    fontWeight:"bold"
  },
  itemsWrapper:{}
});
