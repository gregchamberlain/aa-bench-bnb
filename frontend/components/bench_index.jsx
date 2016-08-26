import React, { Component, PropTypes } from 'react';
import BenchIndexItem from './bench_index_item';

export default class BenchIndex extends Component {

  render() {

    const benches = this.props.benches.map(bench => (
      <BenchIndexItem key={bench.id} bench={bench} />
    ));

    return (
      <div className='benches-index'>
        <h1>Benches</h1>
        <ul>
          {benches}
        </ul>
      </div>
    );
  }
}
