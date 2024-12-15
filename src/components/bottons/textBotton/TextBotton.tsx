import {View, Text, StyleSheet, Alert} from 'react-native';
import React from 'react';
import TopBar from '../../TopBar';
import {Button} from 'react-native-paper';

export default function TextBotton() {
  return (
    <View style={styles.container}>
      <Text>Text Botton</Text>
      <Button onPress={() => Alert.alert('default')}>Default</Button>
      <Button
        style={styles.custom}
        textColor="white"
        onPress={() => Alert.alert('Custom')}>
        Custom
      </Button>
      <Button disabled onPress={() => Alert.alert('Disabled')}>
        Disabled
      </Button>
      <Button icon="camera" onPress={() => Alert.alert('icon')}>
        Icon
      </Button>
      <Button loading onPress={() => Alert.alert('loading')}>
        Loading...
      </Button>
      <Button
        contentStyle={{flexDirection: 'row-reverse'}}
        icon="folder"
        onPress={() => Alert.alert('loading')}>
        Icon Right
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
  },
  custom: {
    color: '#FFFFFF',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#3498db',
  },
});
