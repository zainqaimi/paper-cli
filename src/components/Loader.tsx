import {View, Text} from 'react-native';
import React from 'react';
import {ActivityIndicator, MD2Colors} from 'react-native-paper';

const Loader = () => {
  return (
    <View>
      <ActivityIndicator
        size={'large'}
        color={MD2Colors.cyan900}
        animating={true}
      />
    </View>
  );
};

export default Loader;
