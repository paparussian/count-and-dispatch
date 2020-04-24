import {applyMiddleware, createStore} from 'redux';
import {testAction} from './test/actions';
import createReducer from './reducers';
import {composeWithDevTools} from 'redux-devtools-extension';

export function initStore() {
    return store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}