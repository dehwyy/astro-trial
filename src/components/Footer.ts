import {html, LitElement} from "lit";

export class Footer extends LitElement {
    render() {
        return html`
            <div style="font-family: 'generis', sans-serif; background: #222222;padding-top: 5px;color: white;text-align: center; font-size: 20px">
                by dehwyy
            </div>
        `
    }
}

customElements.define("footer", Footer)