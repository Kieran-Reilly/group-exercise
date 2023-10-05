class MyGroup extends HTMLElement {
    #shadowRoot;
    #toggleButton;
    #bodyContent;
    #clickHandler = this.#click.bind(this);

    constructor () {
        super();
    }

    connectedCallback() {
        this.#shadowRoot = this.attachShadow({mode: "open"});
        this.#initialize().then(() => {
            this.dataset.show = "false";
            this.#toggleButton = this.#shadowRoot.querySelector("#toggle");
            this.#bodyContent = this.#shadowRoot.querySelector(".group-body");
            this.#toggleButton.addEventListener("click", this.#clickHandler);
        });
    }

    disconnectedCallback() {
        this.#shadowRoot = null;
        this.#toggleButton = null;
        this.#bodyContent = null;
        this.#toggleButton.removeEventListener("click", this.#clickHandler);
        this.#clickHandler = null;
    }

    async #click(event) {
        if (this.dataset.show === "true") {
            this.dataset.show = "false";
            this.#bodyContent.setAttribute("hidden", "");
            this.#toggleButton.innerText = "Open";
        } else {
            this.dataset.show = "true";
            this.#bodyContent.removeAttribute("hidden");
            this.#toggleButton.innerText = "Close";
        }
    }

    async #initialize() {
        this.#shadowRoot.innerHTML += await fetch("./components/my-group/my-group.html").then(response => response.text());
    }
}

customElements.define("my-group", MyGroup);