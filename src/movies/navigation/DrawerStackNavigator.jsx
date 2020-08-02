import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from './DrawerContent';
import MoviesStackNavigator from './MoviesStackNavigator';

const Drawer = createDrawerNavigator();

const DrawerStackNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="app"
      drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="app" component={MoviesStackNavigator} />
    </Drawer.Navigator>
  );
};
export default DrawerStackNavigator;
