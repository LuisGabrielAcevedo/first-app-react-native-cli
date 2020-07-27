import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoadingPage from '../views/LoadingPage/LoadingPage';
import LoginPage from '../views/LoginPage/LoginPage';
import HomePage from '../views/HomePage/HomePage';
import ProfilePage from '../views/ProfilePage/ProfilePage';
import ResultsPage from '../views/ResultsPage/ResultsPage';

import {
  LOADING_PAGE,
  LOGIN_PAGE,
  RESULTS_PAGE,
  PROFILE_PAGE,
  HOME_PAGE,
} from './../constants';

const AppNavigator = createStackNavigator(
  {
    [LOADING_PAGE]: LoadingPage,
    [LOGIN_PAGE]: LoginPage,
    [HOME_PAGE]: HomePage,
    [RESULTS_PAGE]: ResultsPage,
    [PROFILE_PAGE]: ProfilePage,
  },
  {
    headerMode: 'none',
  },
);

export default createAppContainer(AppNavigator);
