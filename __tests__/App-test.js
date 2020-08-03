/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});

// import 'react-native';
// import React from 'react';
// import SamplePage from '../src/screens/SamplePage/SamplePage';
// import renderer from 'react-test-renderer';
// import configureStore from 'redux-mock-store';
// import createSagaMiddleware from 'redux-saga';
// import {Provider} from 'react-redux';
// import MockedNavigator from '../mocks/MockedNavigator';

// const middlewares = [createSagaMiddleware()];
// const mockStore = configureStore(middlewares);
// const store = mockStore({});

// it('renders correctly', () => {
//   renderer.create(
//     <Provider store={store}>
//       <SamplePage />
//       <MockedNavigator component={SamplePage} />
//     </Provider>,
//   ).toJSON;
// });
