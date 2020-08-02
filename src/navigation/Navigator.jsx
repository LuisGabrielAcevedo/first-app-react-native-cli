import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Movies from '../movies/Movies';
import Main from '../main/Main';
import Agency from '../agency/Agency';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="main"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="movies" component={Movies} />
      <Stack.Screen name="main" component={Main} />
      <Stack.Screen name="agency" component={Agency} />
    </Stack.Navigator>
  );
};

export default Navigator;
