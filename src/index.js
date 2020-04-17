import {applyMiddleware, createStore} from 'redux';




window.onload = 
function createButton() {
    console.log('mancuso', applyMiddleware);
    const incrButton = document.createElement("button");
    const textButton_1 = document.createTextNode("+");
    incrButton.appendChild(textButton_1);
    document.getElementById("counter").appendChild(incrButton); 

    const decrButton = document.createElement("button");
    const textButton_2 = document.createTextNode("-");
    decrButton.appendChild(textButton_2);
    document.getElementById("counter").appendChild(decrButton); 


    const paragraph = document.getElementById('value');
    let value = 0;
    incrButton.addEventListener("click", function(){
        value = value+1;
        paragraph.innerHTML = value;
        console.log(store.dispatch(INCRACTION));
    });

    decrButton.addEventListener("click", function(){
        value = value -1;
        paragraph.innerHTML = value;
        console.log(store.dispatch(DECRACTION));
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

console.log(clickReducer);

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
console.warn("dispatcho la action ",store.dispatch(INCRACTION()));

/*con il metodo getState() prendo il valore dello state*/
console.log(store.getState());















//  class MyCounter extends HTMLElement {
//      static get observedAttributes() {
//           //return ["oldValue"]
//          return {
//              value: {type: Number, attribute: false}
//          };
//      }
//      constructor() {
//          super();
//          this.attachShadow({mode:"open"});
//          this.render();
//      }
//      render () {
//          const div = document.createElement('template');
//          let value = 0;
//          div.innerHTML = `
//              <div>
//                  <p id="oldValue" value=${value}>Icrement or decrement ${value}</p>
//                  <button id="incrValue" onclick="${() => incrValue(value)}">+</button>
//                  <button id="decrValue">-</button>
//              </div>
//          `;
//          this.shadowRoot.appendChild(div.content.cloneNode(true));
         
//      }
//     //  incrValue = value => {
//     //      console.log(value);
//     //      return value +1
//     //  };
//  }
//  customElements.define("my-counter", MyCounter);