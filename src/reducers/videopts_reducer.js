import { FETCH_VIDEOPTS, FIND_VIDEOPT, ERROR_VIDEOPT } from '../constants';

const INITIAL_STATE = { all: [], single: null, error: undefined };

export default function(state = INITIAL_STATE, action){
  switch (action.type) {
    case FETCH_VIDEOPTS:
      return { ...state, all: action.payload.data };
    case FIND_VIDEOPT:
      return { ...state, single: action.payload, error: undefined };
    case ERROR_VIDEOPT:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
