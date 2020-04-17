import {applyMiddleware, createStore} from 'redux';
window.onload = 
function createButton() {
    console.log('mancuso', applyMiddleware);
    const incrButton = document.createElement("button");
    const textButton = document.createTextNode("+");
    incrButton.appendChild(textButton);
    document.getElementById("counter").appendChild(incrButton); 

    const paragraph = document.getElementById('value');
    let value = 0;
    incrButton.addEventListener("click", function(){
        value = value+1;
        paragraph.innerHTML = value;
    })
}

/*creo il redux store */
const store = createStore(
    (state = 0) => state
  );
/*con il metodo getState() prendo lo state*/
  console.log(store.getState());
/*creo la action (oggetto che contiene info sull'azione appena verificata)*/
  const ACTION = {
      type: "CLICK",
      text: "You clicked!"
  }
console.log(ACTION);

/*creo l'action creator (funzione che ritorna l'azione. ovvero crea un oggetto che rappresenta gli eventi dell'azione)*/
const click = () => {
    return {type: "CLICK",
            text: "You clicked action creator!"
        }
}

/* invio la action allo store*/
console.log(store.dispatch(click()));


const defaultState = {
    clicked: false
}
/*creo il reducer: responsabile delle modifiche allo state, ossia risponde alle action dispatchate - RITORNA SEMPRE UN NUOVO STATE*/
const clickReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "CLICK":
            return {clicked: true};
        default:
            return state
    }
}

console.log(defaultState);













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