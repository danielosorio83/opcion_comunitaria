import { FETCH_PLANS } from '../actions/constants';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_PLANS:
      return action.payload.data;
    default:
      return state;
  }
}
