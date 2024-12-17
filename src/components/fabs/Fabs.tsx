import {View, Text, StyleSheet, Alert} from 'react-native';
import React from 'react';
import {FAB} from 'react-native-paper';

export default function Fabs() {
  return (
    <FAB
      icon="plus"
      style={styles.fab}
      onPress={() => Alert.alert('Pressed')}
    />
  );
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
