import React from 'react';
import {BottomNavigation} from 'react-native-paper';
import MusicRoute from '../screens/bottomtabs/MusicRoute';
import AlbumsRoute from '../screens/bottomtabs/AlbumsRoute';
import RecentsRoute from '../screens/bottomtabs/RecentsRoute';
import NotificationsRoute from '../screens/bottomtabs/NotificationsRoute';
const routes = [
  {
    key: 'music',
    title: 'Favorites',
    focusedIcon: 'heart',
    unfocusedIcon: 'heart-outline',
  },
  {key: 'albums', title: 'Albums', focusedIcon: 'album'},
  {key: 'recents', title: 'Recents', focusedIcon: 'history'},
  {
    key: 'notifications',
    title: 'Notifications',
    focusedIcon: 'bell',
    unfocusedIcon: 'bell-outline',
  },
];
export default function BottomTabs() {
  const [index, setIndex] = React.useState(0);

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
