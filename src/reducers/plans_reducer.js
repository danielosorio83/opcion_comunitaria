import { FETCH_PLANS, FIND_PLAN, ERROR_PLAN } from '../constants';

const INITIAL_STATE = { all: [], single: null };

export default function(state = INITIAL_STATE, action){
  switch (action.type) {
    case FETCH_PLANS:
      return { ...state, all: action.payload.data };
    case FIND_PLAN:
      return { ...state, single: action.payload };
    case ERROR_PLAN:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
