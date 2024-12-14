import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useTheme} from 'react-native-paper';
import BottomBar from '../components/BottomBar';
import Loader from '../components/Loader';
import AvatarScreen from '../components/AvatarScreen';
import BadgeScreen from '../components/BadgeScreen';
import BannerScreen from '../components/BannerScreen';

const Home = () => {
  const theme = useTheme();

  return (
    <View style={{backgroundColor: theme.colors.primary, flex: 1}}>
      <BannerScreen />
      <View style={styles.container}>
        <Text style={{color: theme.colors.secondary}}>Home</Text>
        <AvatarScreen />
        <BadgeScreen />
      </View>
      {/* <Loader /> */}
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
