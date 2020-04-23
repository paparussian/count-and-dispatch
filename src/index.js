import {applyMiddleware, createStore} from 'redux';
// import {createAction} from 'redux-actions';
// import { composeWithDevTools } from 'redux-devtools-extension';
import {reducers} from '../store/test/index';

import {modifyCounter as modifyCounter} from '../store/test/index';

import connect from "../store/connect";


/*creo il redux store */
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

/*creo la funzione render per renderizzare in HTML */
function render(){
    const paragraph = document.getElementById('value');
    paragraph.innerHTML = store.getState().counter;
}

/*renderizzo lo state quando carico la pagina*/
render();

const incrButton = document.getElementById('increment');
const decrButton = document.getElementById('decrement');

/*invio la action allo store tramite il dispatch*/

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