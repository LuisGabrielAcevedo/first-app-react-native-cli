import {takeLatest, call, put} from 'redux-saga/effects';
import {
  GET_LOCATIONS_START,
  GET_LOCATIONS_SUCCESS,
  GET_LOCATIONS_ERROR,
} from '../../constants/actionTypes';
import apiCalls from '../../api';

const country = 'MX';
const currency = 'USD';
const locale = 'en-US';

export function* getLoacations({payload}) {
  try {
    const url = `/autosuggest/v1.0/${country}/${currency}/${locale}/?query=${payload.query}`;
    const method = 'GET';
    const resp = yield call(apiCalls, method, url);
    yield put({
      type: GET_LOCATIONS_SUCCESS,
      results: resp.data.Places,
    });
  } catch (err) {
    yield put({
      type: GET_LOCATIONS_ERROR,
      err,
    });
  }
}

export default function* itineraries() {
  yield takeLatest(GET_LOCATIONS_START, getLoacations);
}
