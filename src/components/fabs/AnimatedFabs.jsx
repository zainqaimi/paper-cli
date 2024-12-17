import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {AnimatedFAB} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';

const contacts = [
  {
    id: 1,
    key: 'A',
    name: 'Alice',
    description: 'lorem ipsum dolor sit amet',
    date: '1-1-2024',
    time: '12:35',
    color: 'white',
  },

  {
    id: 2,
    key: 'B',
    name: 'Bob',
    description: 'lorem ipsum dolor sit amet',
    date: '2-1-2024',
    time: '13:40',
    color: 'black',
  },

  {
    id: 3,
    key: 'C',
    name: 'Charlie',
    description: 'lorem ipsum dolor sit amet',
    date: '3-1-2024',
    time: '14:55',
    color: 'white',
  },

  {
    id: 4,
    key: 'D',
    name: 'David',
    description: 'lorem ipsum dolor sit amet',
    date: '4-1-2024',
    time: '16:20',
    color: 'black',
  },

  {
    id: 5,
    key: 'E',
    name: 'Eve',
    description: 'lorem ipsum dolor sit amet',
    date: '5-1-2024',
    time: '17:35',
    color: 'white',
  },

  {
    id: 6,
    key: 'F',
    name: 'Frank',
    description: 'lorem ipsum dolor sit amet',
    date: '6-1-2024',
    time: '18:40',
    color: 'black',
  },

  {
    id: 7,
    key: 'G',
    name: 'Grace',
    description: 'lorem ipsum dolor sit amet',
    date: '7-1-2024',
    time: '19:55',
    color: 'white',
  },

  {
    id: 8,
    key: 'H',
    name: 'Harry',
    description: 'lorem ipsum dolor sit amet',
    date: '8-1-2024',
    time: '21:20',
    color: 'black',
  },

  {
    id: 9,
    key: 'I',
    name: 'Isabella',
    description: 'lorem ipsum dolor sit amet',
    date: '9-1-2024',
    time: '22:35',
    color: 'white',
  },

  {
    id: 10,
    key: 'J',
    name: 'Jack',
    description: 'lorem ipsum dolor sit amet',
    date: '10-1-2024',
    time: '23:40',
    color: 'black',
  },

  {
    id: 11,
    key: 'K',
    name: 'Karen',
    description: 'lorem ipsum dolor sit amet',
    date: '11-1-2024',
    time: '00:55',
    color: 'white',
  },

  {
    id: 12,
    key: 'L',
    name: 'Lisa',
    description: 'lorem ipsum dolor sit amet',
    date: '12-1-2024',
    time: '02:20',
    color: 'black',
  },

  {
    id: 13,
    key: 'M',
    name: 'Mary',
    description: 'lorem ipsum dolor sit amet',
    date: '13-1-2024',
    time: '03:35',
    color: 'white',
  },

  {
    id: 14,
    key: 'N',
    name: 'Nancy',
    description: 'lorem ipsum dolor sit amet',
    date: '14-1-2024',
    time: '04:40',
    color: 'black',
  },

  {
    id: 15,
    key: 'O',
    name: 'Olivia',
    description: 'lorem ipsum dolor sit amet',
    date: '15-1-2024',
    time: '05:55',
    color: 'white',
  },
];
export default function AnimatedFabs() {
  const [isExtended, setIsExtended] = React.useState(true);
  const onScroll = ({ nativeEvent }) => {
    const currentScrollPosition =
      Math.floor(nativeEvent?.contentOffset?.y) ?? 0;

    setIsExtended(currentScrollPosition <= 0);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView onScroll={onScroll}>
        {contacts.map(contact => {
          return (
            <View
              key={contact.key}
              style={{
                backgroundColor: 'seagreen',
                borderWidth: 1,
                borderColor: 'yellow',
              }}>
              <Text style={styles.text}>{contact.name}</Text>
              <Text style={styles.text}>{contact.description}</Text>
              <Text style={styles.text}>{contact.date}</Text>
              <Text style={styles.text}>{contact.time}</Text>
            </View>
          );
        })}
      </ScrollView>
      <AnimatedFAB
        icon={'plus'}
        label={'New Messages'}
        extended={isExtended}
        onPress={() => console.log('Pressed')}
        // visible={visible}
        animateFrom={'right'}
        iconMode={'static'}
        style={styles.fabStyle}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  fabStyle: {
    bottom: 16,
    right: 16,
    position: 'absolute',
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    marginLeft: 5,
  },
});
