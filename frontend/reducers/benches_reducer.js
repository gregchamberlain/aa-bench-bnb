import * as ACTIONS from '../actions/bench_actions';

const BenchesReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTIONS.RECEIVE_BENCHES:
      let benches = {};
      action.benches.forEach(bench => (benches[bench.id] = bench));
      return benches;
    default:
      return state;
  }
};

export default BenchesReducer;
