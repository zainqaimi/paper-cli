import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Badge, FAB} from 'react-native-paper';

const BadgeScreen = () => {
  return (
    <View>
      <FAB icon="bell" style={styles.bell} color="white" visible={true} />
      <Badge>5</Badge>
    </View>
  );
};

export default BadgeScreen;

const styles = StyleSheet.create({
  bell: {
    backgroundColor: 'red',
    position: 'absolute',
    right: 10,
    top: 10,
    borderRadius: 50,
    elevation: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: 34,
    height: 34,
  },
});
