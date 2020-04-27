import {applyMiddleware, createStore} from 'redux';
import {reducers} from './store/test/index';

import {actions, selectors} from './store/test';

/*TODO - import connect from "./store/connect";*/

/*creo il redux store */
import store from './store';

/*creo la funzione render per renderizzare in HTML */
function render(){
    const paragraph = document.getElementById('value');
    /*con il metodo getState() prendo il valore dello state*/
    paragraph.innerHTML = selectors.getCounter(store.getState());
}

/*renderizzo lo state quando carico la pagina*/
render();

const incrButton = document.getElementById('increment');
const decrButton = document.getElementById('decrement');

/*invio la action allo store tramite il dispatch*/

incrButton.addEventListener('click', function(){
    store.dispatch(actions.modifyCounter(1));
});

decrButton.addEventListener('click', function(){
    store.dispatch(actions.modifyCounter(-1));
});

/*faccio il subscribe per il render della value nell'element paragraph a ogni aggiornamento 
è un' alternativa a "connect"che dovrà comunque essere poi inserita in sostituzione a subscribe*/
store.subscribe(render);