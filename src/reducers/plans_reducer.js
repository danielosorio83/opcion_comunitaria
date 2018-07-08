import { FETCH_PLANS, FIND_PLAN } from '../actions/constants';

const INITIAL_STATE = { all: [], single: null };

export default function(state = INITIAL_STATE, action){
  switch (action.type) {
    case FETCH_PLANS:
      return { ...state, all: action.payload.data };
    case FIND_PLAN:
      return { ...state, single: action.payload.data };
    default:
      return state;
  }
}
