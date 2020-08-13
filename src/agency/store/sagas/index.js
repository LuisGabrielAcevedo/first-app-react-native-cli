import {all} from 'redux-saga/effects';
import itineraries from './itineraries.sagas';
export default function* rootSaga() {
  yield all([itineraries()]);
}
