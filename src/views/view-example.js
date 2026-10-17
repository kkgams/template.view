import { registerViewPlugin, unregisterViewPlugin } from "/util/view-plugin.js"

export class ViewExample extends HTMLElement {
    connectedCallback() {
        // The root layout rule is required by the Host View guide.
        this.style.display = "contents"
        this.innerHTML = '<article class="prose"><p>Hello from your View.</p></article>'
        registerViewPlugin(this)
    }

    disconnectedCallback() {
        void unregisterViewPlugin(this)
    }
}

customElements.define("view-example", ViewExample)
