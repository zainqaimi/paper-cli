import {View, Text} from 'react-native';
import React from 'react';
import {Divider} from 'react-native-paper';

const fruits = [
  {
    key: 1,
    name: 'Apple',
    color: 'red',
  },
  {
    key: 2,
    name: 'Banana',
    color: 'yellow',
  },

  {
    key: 3,
    name: 'Cherry',
    color: 'red',
  },

  {
    key: 4,
    name: 'Dragon Fruit',
    color: 'green',
  },

  {
    key: 5,
    name: 'Grape',
    color: 'purple',
  },

  {
    key: 6,
    name: 'Kiwi',
    color: 'green',
  },

  {
    key: 7,
    name: 'Lemon',
    color: 'yellow',
  },

  {
    key: 8,
    name: 'Mango',
    color: 'yellow',
  },

  {
    key: 9,
    name: 'Orange',
    color: 'orange',
  },

  {
    key: 10,
    name: 'Pineapple',
    color: 'yellow',
  },
];
export default function DividerScreen() {
  return (
    <View>
      {fruits.map(fruit => (
        <View
          key={fruit.key}
          style={{margin: 10, padding: 10, backgroundColor: fruit.color}}>
          <Text>{fruit.name}</Text>

          <Divider />
        </View>
      ))}
    </View>
  );
}
