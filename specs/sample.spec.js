const { expect } = require('chai');

describe('Ragistration:', function () {
  it('Should register user', async function () {
    await browser.url('https://webdriver.io');

    const title = await $('.hero__subtitle');
    await title.waitForDisplayed();

    const text = await title.getText();
    expect(text).to.be.eql(
      'Next-gen browser and mobile automation test framework for Node.js',
    );
  });
});
