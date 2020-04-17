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


const store = createStore(
    (state = 5) => state
  );
  
  console.log(store.getState());

  const ACTION = {
      type: "CLICK",
      text: "You clicked!"
  }
console.log(ACTION.text);

/*definisco l'action creator */
const click = () => {
    return {type: "CLICK",
            text: "You clicked action creator!"
        }
}

store.dispatch(click());

const defaultState = {
    clicked: false
}

const clickReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "CLICK":
            return {clicked: true};
        default:
            return defaultState
    }
}













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