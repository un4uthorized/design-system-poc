import { newSpecPage } from '@stencil/core/testing';
import { PocCard } from '../poc-card';

describe('poc-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PocCard],
      html: `<poc-card></poc-card>`,
    });
    expect(page.root).toEqualHtml(`
      <poc-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </poc-card>
    `);
  });
});
