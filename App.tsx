/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaView, StyleSheet} from 'react-native';

import Home from './src/screens/Home';
import TopBar from './src/components/TopBar';
import BottomBar from './src/components/BottomBar';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TopBar />
      <Home />
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
