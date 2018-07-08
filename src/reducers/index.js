import { combineReducers } from 'redux';

import plans from './plans_reducer';
import lups from './lups_reducer';

const rootReducer = combineReducers({
  plans,
  lups
});

export default rootReducer;
