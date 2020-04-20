import {applyMiddleware, createStore} from 'redux';


window.onload = 
function createButton() {
    // console.log('mancuso', applyMiddleware);
    const incrButton = document.createElement("button");
    const textButton_1 = document.createTextNode("+");
    incrButton.appendChild(textButton_1);
    document.getElementById("counter").appendChild(incrButton); 

    const decrButton = document.createElement("button");
    const textButton_2 = document.createTextNode("-");
    decrButton.appendChild(textButton_2);
    document.getElementById("counter").appendChild(decrButton); 


    const paragraph = document.getElementById('value');
    let value = store.getState();
    incrButton.addEventListener("click", function(){
        value = value+1;
        paragraph.innerHTML = value;
        console.log(store.dispatch(INCREMENT));
        console.log('STATE IS: ' + value);
    });


    decrButton.addEventListener("click", function(){
        value = value -1;
        paragraph.innerHTML = value;
        console.log(store.dispatch(DECREMENT));
        console.log('STATE IS: ' + value);
    })
}

const INCREMENT = {type: "INCREMENT"};
const DECREMENT = {type: "DECREMENT"};

/*creo il reducer: responsabile delle modifiche allo state, ossia risponde alle action dispatchate - RITORNA SEMPRE UN NUOVO STATE*/
const clickReducer = (state = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state -1;
        default:
            return state
    }
}

// console.log(clickReducer);

/*creo il redux store */
const store = createStore(clickReducer);

/*creo le action creator (funzioni che ritornano le azioni. Ovvero creano oggetti che rappresentano gli eventi dell'azione)*/

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

/* invio la action allo store*/
// console.log("dispatcho la action ",store.dispatch(INCRACTION()));
// console.log("dispatcho la action ",store.dispatch(DECRACTION()));

/*con il metodo getState() prendo il valore dello state*/
console.log(store.getState());