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
        let value = 0;
        p.innerHTML = `
            <div>
                <p id="oldValue" value=${value}>Icrement or decrement ${value}</p>
            </div>
        `;
        this.shadowRoot.appendChild(p.content.cloneNode(true));
    }
}
customElements.define("my-counter", MyCounter);