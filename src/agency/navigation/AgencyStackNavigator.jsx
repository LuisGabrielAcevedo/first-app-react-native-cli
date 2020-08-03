import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Loading from '../views/Loading/Loading';
import Login from '../views/Login/Login';
import Home from '../views/Home/Home';
import Profile from '../views/Profile/Profile';
import Results from '../views/Results/Results';

const Stack = createStackNavigator();

const AgencyStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="loading"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="loading" component={Loading} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="profile" component={Profile} />
      <Stack.Screen name="results" component={Results} />
    </Stack.Navigator>
  );
};

export default AgencyStackNavigator;
