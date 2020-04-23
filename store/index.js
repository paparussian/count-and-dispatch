import {applyMiddleware} from 'redux';
import {createAction} from 'redux-actions';



export const MODIFY_COUNTER = 'MODIFY_COUNTER';
export const modifyCounter = createAction(MODIFY_COUNTER);

/*creo ed esporto la variabile combinedReducers per poterla implementare nel createStore di src/index.js */
