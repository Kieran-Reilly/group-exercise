class MyGroup extends HTMLElement {
    static observedAttributes = [];

    constructor () {
        super();
    }

    connectedCallback() {

    }

    disconnectedCallback() {

    }
}

customElements.define("my-group", MyGroup);