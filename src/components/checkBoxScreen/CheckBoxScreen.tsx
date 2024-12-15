import {View, Text} from 'react-native';
import React from 'react';
import {Checkbox} from 'react-native-paper';

export default function CheckBoxScreen() {
  const [checked, setChecked] = React.useState(false);
  return (
    <View style={{flex: 1}}>
      <Text style={{color: 'black', backgroundColor: 'black'}}>Check</Text>
      <Checkbox
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => setChecked(!checked)}
      />
      <Checkbox.Item
        label="Terms"
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => setChecked(!checked)}
      />
    </View>
  );
}
