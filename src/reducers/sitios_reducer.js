import { FETCH_SITIOS, FIND_SITIO, ERROR_SITIO } from '../constants';

const INITIAL_STATE = { all: [], single: null };

export default function(state = INITIAL_STATE, action){
  switch (action.type) {
    case FETCH_SITIOS:
      return { ...state, all: action.payload.data };
    case FIND_SITIO:
      return { ...state, single: action.payload };
    case ERROR_SITIO:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
