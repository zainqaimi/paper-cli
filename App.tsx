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
import TextBotton from './src/components/bottons/textBotton/TextBotton';
import {IconButton, Provider} from 'react-native-paper';
import OutLineButton from './src/components/bottons/outlinedBotton/OutLineButton';
import ContainedBotton from './src/components/bottons/containedBotton/containedBotton';
import Cards from './src/components/cards/Cards';
import CheckBoxScreen from './src/components/checkBoxScreen/checkBoxScreen';
import ChipScreen from './src/components/chipScreen/ChipScreen';
import TableScreen from './src/components/DataTable/TableScreen';
import DialogScreen from './src/components/dialog/DialogScreen';
import DividerScreen from './src/components/Dividers/DividerScreen';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Provider>
        {/* <TopBar />
      <Home /> */}
        {/* <TableScreen /> */}
        {/* <TextBotton /> */}
        {/* <OutLineButton /> */}
        {/* <ContainedBotton /> */}
        {/* <Cards /> */}
        {/* <CheckBoxScreen /> */}
        {/* <ChipScreen /> */}
        {/* <BottomTabs /> */}
        {/* <DialogScreen /> */}
        <DividerScreen />
      </Provider>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
