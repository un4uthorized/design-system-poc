import { newSpecPage } from '@stencil/core/testing';
import { PocInput } from '../poc-input';

describe('poc-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PocInput],
      html: `<poc-input></poc-input>`,
    });
    expect(page.root).toEqualHtml(`
      <poc-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </poc-input>
    `);
  });
});
