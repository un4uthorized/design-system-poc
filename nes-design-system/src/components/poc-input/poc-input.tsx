import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'poc-input',
  styleUrl: 'poc-input.css',
  shadow: true,
})
export class PocInput {

  @Prop() type: string;

  @Prop() placeholder: string;

  @Prop() value: string;

  render() {
    return (
      <input type={this.type} placeholder={this.placeholder} value={this.value} class="input"/>
    );
  }

}
