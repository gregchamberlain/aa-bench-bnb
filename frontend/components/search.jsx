import React from 'react';
import BenchMap from './bench_map';
import BenchIndex from './bench_index';

const Search = ({ benches, requestBenches, updateBounds }) => (
  <div className='benches-container'>
    <BenchIndex benches={benches} requestBenches={requestBenches} />
    <BenchMap benches={benches} updateBounds={updateBounds} />
  </div>
);

export default Search;
