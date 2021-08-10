import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './components/HomeScreen';
import Scan from './components/Scan';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen />
      <StatusBar style="auto" /> */}

      {/* A component consisting of a flatlist displaying all previously transcribed texts here 
      (the HomeScreen component, HomeCameraButton notrequired),
      along with a button that opens Scan component */}

      <Scan/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


