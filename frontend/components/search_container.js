import { connect } from 'react-redux';
import Search from './search';
import { requestBenches } from '../actions/bench_actions';
import { updateBounds } from '../actions/filter_actions';
import { objectToArray } from '../util/selector';

const mapStateToProps = state => ({
  benches: objectToArray(state.benches),
});

const mapDisptachToProps = dispatch => ({
  requestBenches: () => dispatch(requestBenches()),
  updateBounds: bounds => dispatch(updateBounds(bounds)),
});

export default connect(mapStateToProps, mapDisptachToProps)(Search);
