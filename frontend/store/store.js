import RootReducer from '../reducers';
import RootMiddleware from '../middleware';
import { createStore } from 'redux';

const configureStore = (initialState = {}) => {
  return createStore(RootReducer, initialState, RootMiddleware);
};

export default configureStore;
