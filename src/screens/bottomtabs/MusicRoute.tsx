import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function MusicRoute() {
  return (
    <View style={styles.container}>
      <Text>MusicRoute</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'powderblue',
    alignItems: 'center',
    margin: 'auto',
  },
});
