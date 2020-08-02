import {createStore, applyMiddleware} from 'redux';
import createSadaMiddleware from 'redux-saga';
import reducers from './reducers';
import sagas from './sagas';

export default () => {
  const sagaMidleware = createSadaMiddleware();
  return {
    ...createStore(reducers, applyMiddleware(sagaMidleware)),
    runSaga: sagaMidleware.run(sagas),
  };
};
