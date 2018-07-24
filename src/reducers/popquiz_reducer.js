import { FIND_POPQUIZ, ERROR_POPQUIZ, SUBMIT_POPQUIZ } from '../constants';

const INITIAL_STATE = { single: null, error: undefined };

export default function(state = INITIAL_STATE, action){
  switch (action.type) {
    case FIND_POPQUIZ:
      return { ...state, single: action.payload, error: undefined };
    case ERROR_POPQUIZ:
      return { ...state, error: action.payload };
    case SUBMIT_POPQUIZ:
      return { ...state, single: action.payload, error: undefined };
    default:
      return state;
  }
}
