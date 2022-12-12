import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'poc-card',
  styleUrl: 'poc-card.css',
  shadow: true,
})
export class PocCard {

  @Prop() text: string;

  render() {
    return (
        <Host>
          <div class="card-wrapper">
            { this.text && <h5 class="card-title">{this.text}</h5> }
            <slot />
          </div>
        </Host>
    );
  }

}
