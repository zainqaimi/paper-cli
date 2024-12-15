import {View, Text, StyleSheet, Alert} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';

export default function ContainedBotton() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 24, fontWeight: 'bold'}}>Contained Botton</Text>
      <Button
        style={styles.btn}
        textColor="white"
        mode="contained"
        onPress={() => Alert.alert('default')}>
        Default
      </Button>
      <Button
        mode="contained"
        style={styles.custom}
        onPress={() => Alert.alert('Custom')}>
        Custom
      </Button>
      <Button mode="contained" disabled onPress={() => Alert.alert('Disabled')}>
        Disabled
      </Button>
      <Button
        mode="contained"
        icon="camera"
        onPress={() => Alert.alert('icon')}>
        Icon
      </Button>
      <Button mode="contained" loading onPress={() => Alert.alert('loading')}>
        Loading...
      </Button>
      <Button
        mode="contained"
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
    gap: 10,
  },
  custom: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  btn: {
    borderBlockColor: 'white',
  },
});
