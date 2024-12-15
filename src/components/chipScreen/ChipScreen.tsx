import {View, Text, Image} from 'react-native';
import React from 'react';
import {Chip} from 'react-native-paper';

export default function ChipScreen() {
  return (
    <View>
      <Chip
        mode="outlined"
        icon={({size}) => (
          <Image
            source={require('../../../assets/images/avatarImg.png')}
            style={{width: 28, height: 28, borderRadius: size / 2}}
          />
        )}
        onPress={() => console.log('Pressed')}>
        Example Chip
      </Chip>
    </View>
  );
}
