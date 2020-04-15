class MyCounter extends HTMLElement {
    constructor() {
        super();
        this.value = 0;
    }
    connectedCallback() {
        this.innerHTML = this.value;
        this.addEventListener('click', this.increment, true);
        this.addEventListener('click', this.decrement, true);
    }
    increment() {
        // this.value.onclick = this.value.onclick.bind(this)
        return this.value +1;
    }

    decrement() {
        return this.value -1;
    }


}
customElements.define("my-counter", MyCounter);