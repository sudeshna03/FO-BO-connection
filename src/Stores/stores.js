import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootreducer from './rootReducers';

const initialState = {};

const middlewares = [thunk];

const store = createStore(rootreducer, initialState, applyMiddleware(...middlewares));

export default store;
