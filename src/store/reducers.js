import { combineReducers } from 'redux';

import counter from './counter';
import notice from './notice';

const reducers = combineReducers({
  counter,
  notice
});

export default reducers;
