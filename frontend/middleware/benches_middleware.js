import * as ACTIONS from '../actions/bench_actions';
import { UPDATE_BOUNDS } from '../actions/filter_actions';
import * as API from '../util/bench_api_util';

const BenchesMiddleware = ({getState, dispatch}) => next => action => {
  switch (action.type) {
    case ACTIONS.REQUEST_BENCHES:
      const success = data => dispatch(ACTIONS.receiveBenches(data));
      const filters = {bounds: {
        northEast: {lat: 37.80971, lng: -122.39208},
        southWest: {lat: 37.74187, lng: -122.47791}
      }};
      API.fetchBenches(getState().filters, success);
      return next(action);
    case UPDATE_BOUNDS:
      next(action);
      dispatch(ACTIONS.requestBenches());
    default :
      return next(action);
  }
};


export default BenchesMiddleware;
