import React from 'react';
import {BottomNavigation} from 'react-native-paper';
import MusicRoute from '../screens/bottomtabs/MusicRoute';
import AlbumsRoute from '../screens/bottomtabs/AlbumsRoute';
import RecentsRoute from '../screens/bottomtabs/RecentsRoute';
import NotificationsRoute from '../screens/bottomtabs/NotificationsRoute';

const routes = [
  {
    id: 1,
    key: 'music',
    title: 'Music Play',
    focusedIcon: 'music',
    unfocusedIcon: 'music',
  },
  {id: 2, key: 'albums', title: 'Albums', focusedIcon: 'album'},
  {id: 3, key: 'recents', title: 'Recents', focusedIcon: 'history'},
  {
    id: 4,
    key: 'notifications',
    title: 'Notifications',
    focusedIcon: 'bell',
    unfocusedIcon: 'bell-outline',
  },
];
export default function BottomTabs() {
  const [index, setIndex] = React.useState<number>(0);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
    notifications: NotificationsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
}
