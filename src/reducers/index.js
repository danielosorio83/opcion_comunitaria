import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import plans from './plans_reducer';
import lups from './lups_reducer';
import sitios from './sitios_reducer';
import videopts from './videopts_reducer';
import exams from './exams_reducer';
import popquiz from './popquiz_reducer';

const rootReducer = combineReducers({
  plans,
  lups,
  sitios,
  videopts,
  exams,
  popquiz,
  form: formReducer
});

export default rootReducer;
