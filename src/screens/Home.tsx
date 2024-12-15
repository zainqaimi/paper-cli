import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useTheme} from 'react-native-paper';
import AvatarScreen from '../components/AvatarScreen';
import BadgeScreen from '../components/BadgeScreen';
import BannerScreen from '../components/BannerScreen';
import BottomTabs from '../navigation/BottomTabs';
import BottomBar from '../components/BottomBar';

const Home = () => {
  const theme = useTheme();

  return (
    <View style={{backgroundColor: 'powderblue', flex: 1}}>
      <BannerScreen />
      <View style={styles.container}>
        <Text style={{color: theme.colors.secondary}}>Home</Text>
        <AvatarScreen />
        <BadgeScreen />
      </View>
      {/* <Loader /> */}
      {/* <BottomBar /> */}
      {/* <BottomTabs /> */}
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
