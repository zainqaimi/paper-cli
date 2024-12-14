import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Appbar, FAB, useTheme} from 'react-native-paper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function BottomBar() {
  const theme = useTheme();

  const {bottom} = useSafeAreaInsets();
  return (
    <Appbar style={[styles.bottom, {backgroundColor: theme.colors.secondary}]}>
      <Appbar.Action icon="calendar" onPress={() => {}} />
      <Appbar.Action icon="archive" onPress={() => {}} />
      <FAB
        size="medium"
        icon="plus"
        onPress={() => {}}
        style={[styles.fab, {backgroundColor: theme.colors.primary}]}
      />
      <Appbar.Action icon="email" onPress={() => {}} />
      <Appbar.Action icon="label" onPress={() => {}} />
    </Appbar>
  );
}

const styles = StyleSheet.create({
  bottom: {
    // backgroundColor: 'powderblue',
    justifyContent: 'space-between',
  },
  fab: {
    top: -25,
    color: 'white',
    borderRadius: 50,
  },
});
