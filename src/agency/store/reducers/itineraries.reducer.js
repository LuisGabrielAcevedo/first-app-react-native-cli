import {
  GET_LOCATIONS_START,
  GET_LOCATIONS_ERROR,
  GET_LOCATIONS_SUCCESS,
} from '../../constants/actionTypes';

export default function (state, action) {
  switch (action.type) {
    case GET_LOCATIONS_START:
      return {...state};
      break;
    case GET_LOCATIONS_SUCCESS:
      console.log();
      return {
        ...state,
        places: action.results,
      };
      break;
    case GET_LOCATIONS_ERROR:
      return {
        ...state,
        places: [],
        error: action.err,
      };
      break;
    default:
      return {...state};
  }
}
