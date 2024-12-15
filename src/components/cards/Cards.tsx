import {View} from 'react-native';
import React from 'react';
import {Avatar, AvatarIconProps, Button, Card, Text} from 'react-native-paper';

const LeftContent = ({size}: {size: number}) => (
  <Avatar.Icon size={size} icon="folder" />
);

export default function Cards() {
  return (
    <View style={{paddingHorizontal: 20}}>
      <Card
        style={{
          paddingHorizontal: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        mode="outlined" // for outlined mode
        // mode="contained" //for content mode
        // mode="elevated" // for elevated mode
      >
        <Card.Title
          title="Card Title"
          subtitle="Card Subtitle"
          left={LeftContent}
        />
        <Card.Content>
          <Text variant="titleLarge">Card title</Text>
          <Text variant="bodyMedium">Card content</Text>
        </Card.Content>
        <Card.Cover
          source={{uri: 'https://picsum.photos/700'}}
          style={{resizeMode: 'contain', paddingHorizontal: 10}}
        />
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>
    </View>
  );
}
