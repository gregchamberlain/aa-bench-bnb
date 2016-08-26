import { connect } from 'react-redux';
import BenchIndex from './bench_index';
import { requestBenches } from '../actions/bench_actions';
import { objectToArray } from '../util/selector';

const mapStateToProps = state => ({
  benches: objectToArray(state.benches),
});

const mapDisptachToProps = dispatch => ({
  requestBenches: () => dispatch(requestBenches())
});

export default connect(mapStateToProps, mapDisptachToProps)(BenchIndex);
