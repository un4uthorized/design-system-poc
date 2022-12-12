import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'poc-button',
  styleUrl: 'poc-button.css',
  shadow: true,
})
export class PocButton {

  @Prop() text: string;

  @Prop() appearance: string;

  render() {
    return (
      <button class={`btn ${this.appearance}`}>{this.text}</button>
    );
  }

}
