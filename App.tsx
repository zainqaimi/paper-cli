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
import BottomTabs from './src/navigation/BottomTabs';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TopBar />
      <Home />
      {/* <BottomTabs /> */}
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
