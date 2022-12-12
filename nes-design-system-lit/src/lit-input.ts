import { html, css, LitElement, property } from  'lit-element';

export class LitInput extends LitElement {

    static styles = css`
    .input {
        padding: 0.4rem 1rem;
        border: none;
        background-color: #fff;
        color: #000;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        cursor: pointer;
        user-select: none;
        transition: all 0.2s ease-in-out;
        border: solid 1px rgb(99, 99, 99);
    }
`;


    @property({ type: String })
    placeholder = ''

    @property({ type: String })
    value = ''

    @property({ type: String })
    type = 'text'

    render() {
        return html`
            <input class="input" placeholder="${this.placeholder}" value="${this.value}" type="${this.type}"}/>
        `;
    }
}