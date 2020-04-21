import {applyMiddleware, createStore} from 'redux';

const paragraph = document.getElementById('value');

/*creo il reducer: responsabile delle modifiche allo state, ossia risponde alle action dispatchate - RITORNA SEMPRE UN NUOVO STATE*/
function reducers(state, action){
    if(typeof state === 'undefined') {
        return 0
    }
    switch(action.type){
        case 'INCREMENT':
            return state = state + 1;
        case 'DECREMENT':
            return state = state - 1;
        default:
            return state
    }
}

/*creo il redux store */
const store = createStore(reducers);

/*creo la funzione render per renderizzare in HTML */
function render(){
    paragraph.innerHTML = store.getState().toString();

}
/*renderizzo lo state quando carico la pagina*/
render();

const incrButton = document.getElementById('increment');
const decrButton = document.getElementById('decrement');

incrButton.addEventListener('click', function(){
    store.dispatch({type: 'INCREMENT'});
});

decrButton.addEventListener('click', function(){
    store.dispatch({type: 'DECREMENT'});
});

//faccio il subscribe per il render della value nel paragrafo a ogni aggiornamento
store.subscribe(render);


/*con il metodo getState() prendo il valore dello state*/
console.log("STARTING STATE IS: " + store.getState());
































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


/*function che dispatcha il payload 
const incrementPayload = (value) => {
    return {type: INCREMENT,
            payload: value}
}

const decrementPayload = (value) => {
    return {type: DECREMENT,
            payload: value}
}


// console.log(reducers);


/*creo le action creator (funzioni che ritornano le azioni. Ovvero creano oggetti che rappresentano gli eventi dell'azione)

  const INCRACTION = () => {
      return {type: INCREMENT,
              text: "You clicked the INCREMENTER!"
             } 
  }

  const DECRACTION = () => {
      return {type: DECREMENT,
              text: "You clicked the DECREMENTER!"
             }
  }
*/

/* invio la action allo store*/
// console.log("dispatcho la action ",store.dispatch(INCRACTION()));
// console.log("dispatcho la action ",store.dispatch(DECRACTION()));



