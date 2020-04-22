import {applyMiddleware, createStore} from 'redux';
// import {createAction} from 'redux-actions';
// import { composeWithDevTools } from 'redux-devtools-extension';
import {reducers} from '../store/test/index.js';
import {modifyCounter} from '../store/test/index.js'

const paragraph = document.getElementById('value');


/*creo il redux store */
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

/*creo la funzione render per renderizzare in HTML */
function render(){
    paragraph.innerHTML = store.getState().counter;
}

/*renderizzo lo state quando carico la pagina*/
render();

const incrButton = document.getElementById('increment');
const decrButton = document.getElementById('decrement');

incrButton.addEventListener('click', function(){
    store.dispatch(modifyCounter(1));
    console.log('State is: ' ,store.getState());
});

decrButton.addEventListener('click', function(){
    store.dispatch(modifyCounter(-1));
    console.log('State is: ' ,store.getState());
});

//faccio il subscribe per il render della value nell'element paragraph a ogni aggiornamento
store.subscribe(render);


/*con il metodo getState() prendo il valore dello state*/
console.log("STARTING STATE IS: " + store.getState().counter);





















/*
const reducers = (state = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state -1;
        default:
            return state
    }
}
*/


/*function che dispatchano il payload 
const incrementPayload = (value) => {
    return {type: INCREMENT,
            payload: value}
}

const decrementPayload = (value) => {
    return {type: DECREMENT,
            payload: value}
}
*/


/* invio la action allo store*/
// console.log("dispatcho la action ",store.dispatch(INCRACTION()));
// console.log("dispatcho la action ",store.dispatch(DECRACTION()));



