import {ScrollView, View} from 'react-native';
import React from 'react';
import {Button, Dialog, PaperProvider, Portal, Text} from 'react-native-paper';

export default function DialogScreen() {
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  return (
    <PaperProvider>
      <View>
        <Button onPress={showDialog}>Show Dialog</Button>
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Alert</Dialog.Title>
            {/* <Dialog.Content>
              <Text variant="bodyMedium">This is simple dialog</Text>
            </Dialog.Content> */}
            <Dialog.ScrollArea style={{height: '20%'}}>
              <ScrollView contentContainerStyle={{paddingHorizontal: 24}}>
                <Text>This is a scrollable area </Text>
                <Text>This is a scrollable area </Text>
                <Text>This is a scrollable area </Text>
                <Text>This is a scrollable area </Text>
                <Text>This is a scrollable area </Text>
                <Text>This is a scrollable area </Text>
                <Text>This is a scrollable area </Text>
                <Text>This is a scrollable area </Text>
                <Text>This is a scrollable area </Text>
                <Text>This is a scrollable area </Text>
                <Text>This is a scrollable area </Text>
                <Text>This is a scrollable area </Text>
                <Text>This is a scrollable area </Text>
                <Text>This is a scrollable area </Text>
                <Text>This is a scrollable area </Text>
                <Text>This is a scrollable area </Text>
                <Text>This is a scrollable area </Text>
                <Text>This is a scrollable area </Text>
                <Text>This is a scrollable area </Text>
                <Text>This is a scrollable area </Text>
                <Text>This is a scrollable area </Text>
                <Text>This is a scrollable area </Text>
              </ScrollView>
            </Dialog.ScrollArea>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Done</Button>
              <Button onPress={hideDialog}>ok</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </PaperProvider>
  );
}
