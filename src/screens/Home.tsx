import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useTheme} from 'react-native-paper';
import BottomBar from '../components/BottomBar';

const Home = () => {
  const theme = useTheme();

  return (
    <View style={{backgroundColor: theme.colors.primary, flex: 1}}>
      <View style={styles.container}>
        <Text style={{color: theme.colors.secondary}}>Home</Text>
      </View>

      <BottomBar />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
});
