import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/Home';
import {Drawer} from 'react-native-paper';

const RNDrawer = createDrawerNavigator();
export default function DrawerNavigation() {
  const [active, setActive] = React.useState('');

  return (
    <RNDrawer.Navigator
      drawerContent={() => (
        <Drawer.CollapsedItem
          focusedIcon="inbox"
          unfocusedIcon="inbox-outline"
          label="Inbox"
        />
      )}>
      <RNDrawer.Screen name="Home" component={Home} />
    </RNDrawer.Navigator>
  );
}
