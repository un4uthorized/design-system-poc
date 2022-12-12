import { newE2EPage } from '@stencil/core/testing';

describe('poc-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<poc-card></poc-card>');

    const element = await page.find('poc-card');
    expect(element).toHaveClass('hydrated');
  });
});
