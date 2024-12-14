import {View, Text} from 'react-native';
import React from 'react';
import {Avatar} from 'react-native-paper';

const AvatarScreen = () => {
  return (
    <View>
      <Avatar.Icon
        size={54}
        icon="folder"
        style={{backgroundColor: 'white', margin: 20}}
      />
      <Avatar.Image
        size={56}
        source={require('../../assets/images/avatarImg.png')}
        style={{margin: 20, backgroundColor: 'white'}}
      />
      <Avatar.Text
        size={54}
        label="XD"
        color="black"
        style={{backgroundColor: 'white', margin: 20}}
      />
    </View>
  );
};

export default AvatarScreen;
