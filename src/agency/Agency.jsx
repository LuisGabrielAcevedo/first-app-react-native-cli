import React from 'react';
import AgencyStackNavigator from './navigation/AgencyStackNavigator';
import {Provider} from 'react-redux';
import Store from './store';

const store = Store();

const Agency = () => (
  <Provider store={store}>
    <AgencyStackNavigator />
  </Provider>
);

export default Agency;
