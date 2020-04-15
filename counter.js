class MyCounter extends HTMLElement {
    static get observedAttributes() {
        return ["oldValue"]
    }
    constructor() {
        super();
        this.attachShadow({mode:"open"});
        this.render();
    }
render () {
    const p = document.createElement('template');
    p.innerHTML = `
        <div>
            <p id="oldValue">Icrement or decrement</p>
        </div>
    `;
    this.shadowRoot.appendChild(p.content.cloneNode(true));
}
    attributeChangedCallback(oldValue, newValue){
        this.shadowRoot.getElementById(oldValue).innerText = newValue;
    }
}
customElements.define("my-counter", MyCounter);