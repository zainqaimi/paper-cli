import {View, Text, Alert, StyleSheet} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';

export default function OutLineButton() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 24, fontWeight: 'bold'}}>OutLineButton</Text>
      <Button mode="outlined" onPress={() => Alert.alert('default')}>
        Default
      </Button>
      <Button
        mode="outlined"
        style={styles.custom}
        onPress={() => Alert.alert('Custom')}>
        Custom
      </Button>
      <Button mode="outlined" disabled onPress={() => Alert.alert('Disabled')}>
        Disabled
      </Button>
      <Button mode="outlined" icon="camera" onPress={() => Alert.alert('icon')}>
        Icon
      </Button>
      <Button mode="outlined" loading onPress={() => Alert.alert('loading')}>
        Loading...
      </Button>
      <Button
        mode="outlined"
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
});
