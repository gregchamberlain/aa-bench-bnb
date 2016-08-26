import React from 'react';
import { Provider } from 'react-redux';
import SearchContainer from './search_container';

export default ({ store }) => (
  <Provider store={store}>
    <SearchContainer />
  </Provider>
);
