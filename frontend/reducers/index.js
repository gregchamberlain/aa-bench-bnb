import BenchesReducer from './benches_reducer';
import FilterReducer from './filter_reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  benches: BenchesReducer,
  filters: FilterReducer,
});
