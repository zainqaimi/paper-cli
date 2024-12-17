/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {Alert, SafeAreaView, StyleSheet} from 'react-native';

import Home from './src/screens/Home';
import TopBar from './src/components/TopBar';
import BottomBar from './src/components/BottomBar';
import BottomTabs from './src/navigation/BottomTabs';
import TextBotton from './src/components/bottons/textBotton/TextBotton';
import {IconButton, PaperProvider, Provider} from 'react-native-paper';
import OutLineButton from './src/components/bottons/outlinedBotton/OutLineButton';
import ContainedBotton from './src/components/bottons/containedBotton/containedBotton';
import Cards from './src/components/cards/Cards';
import CheckBoxScreen from './src/components/checkBoxScreen/checkBoxScreen';
import ChipScreen from './src/components/chipScreen/ChipScreen';
import TableScreen from './src/components/DataTable/TableScreen';
import DialogScreen from './src/components/dialog/DialogScreen';
import DividerScreen from './src/components/Dividers/DividerScreen';
import DrawerNavigation from './src/navigation/DrawerNavigation';
import {NavigationContainer} from '@react-navigation/native';
import AnimatedFabs from './src/components/fabs/AnimatedFabs';
import FabGroupScreen from './src/components/fabs/FabGroupScreen';
import CustomButton from './src/components/CustomButton';

function App() {
  return (
    <>
      <Provider>
        {/* <NavigationContainer>
          <BottomTabs />
          <DrawerNavigation />
        </NavigationContainer> */}
        {/* <AnimatedFabs />
        <FabGroupScreen /> */}
        <CustomButton
          text="custom Button"
          icon="cemera"
          mode="text"
          color="powderblue"
          onPress={() => Alert.alert('pressed')}
          style={{
            borderRadius: 10,
            width: 300,
            height: 100,
            backgroundColor: 'blue',
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 8,
          }}
        />
      </Provider>
    </>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
