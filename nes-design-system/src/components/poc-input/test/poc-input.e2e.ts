import { newE2EPage } from '@stencil/core/testing';

describe('poc-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<poc-input></poc-input>');

    const element = await page.find('poc-input');
    expect(element).toHaveClass('hydrated');
  });
});
