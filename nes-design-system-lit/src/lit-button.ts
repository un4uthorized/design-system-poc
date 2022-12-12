import { html, css, LitElement, property } from  'lit-element';

export class LitButton extends LitElement {

    static styles = css`
    .base-btn {
        padding: 0.3rem 1rem;
        border: none;
        background-color: #fff;
        color: #000;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        cursor: pointer;
        user-select: none;
        transition: all 0.2s ease-in-out;
        height: 100%;
    }
    .base-btn.primary {
        background-color: #6b18fa;
        color: #fff;
    }
`;


    @property({ type: String })
    text = 'Base Button'

    @property({ type: String })
    appearance = ''

    render() {
        return html`
            <button class="base-btn ${this.appearance}">${this.text}</button>
        `;
    }
}