import { html, css, LitElement, property } from  'lit-element';

export class LitCard extends LitElement {

    static styles = css`
    .card {
        padding: 1rem;
        background-color: #fff;
        color: #000;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        user-select: none;
        transition: all 0.2s ease-in-out;
        border: solid 1px rgba(0, 0, 0, 0.248);
    }
    .card-title {
        font-size: 1.5rem;
        font-weight: 700;
        margin: 0;
    }
`;


    @property({ type: String })
    text = 'text'

    render() {
        return html`
            <div class="card">
                <h5 class="card-title">${this.text}</h5>
                <slot></slot>
            </div>
        `;
    }
}