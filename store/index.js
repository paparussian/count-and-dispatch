import {applyMiddleware, createStore} from 'redux';
import {createAction} from 'redux-actions';

import {reducers} from './test/index.js';


export const MODIFY_COUNTER = 'MODIFY_COUNTER';
export const modifyCounter = createAction(MODIFY_COUNTER);

console.log(reducers)
