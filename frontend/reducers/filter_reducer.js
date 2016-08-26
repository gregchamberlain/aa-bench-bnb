import * as ACTIONS from '../actions/filter_actions';

const defaultState = {
  bounds: {}
}

const FilterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_BOUNDS:
      return Object.assign({}, state, {bounds: action.bounds});
    default:
      return state;
  }
};

export default FilterReducer;
