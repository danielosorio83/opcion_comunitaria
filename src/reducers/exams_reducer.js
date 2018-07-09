import { FETCH_EXAMS, FIND_EXAM, ERROR_EXAM } from '../constants';

const INITIAL_STATE = { all: [], single: null };

export default function(state = INITIAL_STATE, action){
  switch (action.type) {
    case FETCH_EXAMS:
      return { ...state, all: action.payload.data };
    case FIND_EXAM:
      return { ...state, single: action.payload };
    case ERROR_EXAM:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
