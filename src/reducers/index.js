import { combineReducers } from 'redux';

import plans from './plans_reducer';
import lups from './lups_reducer';
import sitios from './sitios_reducer';
import videopts from './videopts_reducer';
import exams from './exams_reducer';

const rootReducer = combineReducers({
  plans,
  lups,
  sitios,
  videopts,
  exams
});

export default rootReducer;
