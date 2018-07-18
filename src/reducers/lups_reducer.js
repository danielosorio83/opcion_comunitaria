import { FETCH_LUPS, FIND_LUP, ERROR_LUP } from '../constants';

const INITIAL_STATE = { all: [], single: null, error: undefined };

export default function(state = INITIAL_STATE, action){
  switch (action.type) {
    case FETCH_LUPS:
      return { ...state, all: action.payload.data };
    case FIND_LUP:
      return { ...state, single: action.payload, error: undefined };
    case ERROR_LUP:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
