import {applyMiddleware, createStore} from 'redux';

console.log('pippo', applyMiddleware)
// class MyCounter extends HTMLElement {
//     static get observedAttributes() {
//         // return ["oldValue"]
//         return {
//             value: {type: Number, attribute: false}
//         };
//     }
//     constructor() {
//         super();
//         this.attachShadow({mode:"open"});
//         this.render();
//     }
//     render () {
//         const div = document.createElement('template');
//         let value = 0;
//         div.innerHTML = `
//             <div>
//                 <p id="oldValue" value=${value}>Icrement or decrement ${value}</p>
//                 <button id="incrValue" onclick="${() => incrValue(value)}">+</button>
//                 <button id="decrValue">-</button>
//             </div>
//         `;
//         this.shadowRoot.appendChild(div.content.cloneNode(true));
//     }
//     incrValue = value => {
//         console.log(value);
//         return value +1
//     };
// }
// customElements.define("my-counter", MyCounter);