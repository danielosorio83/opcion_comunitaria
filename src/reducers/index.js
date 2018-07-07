import { combineReducers } from 'redux';

import plans from './plans_reducer';

const rootReducer = combineReducers({
  plans
});

export default rootReducer;
