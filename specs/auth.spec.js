const { app } = require('../src/pages');
const { expect } = require('chai');

const rndNumber = () => Math.floor(Math.random() * (100000 - 1) + 1).toString();

describe('Authorization:', function () {
  it('Register new account', async function () {
    const uuid = rndNumber();

    await browser.url('/sign-up');

    await app.authPage.register({
      name: `John${uuid}`,
      email: `test-email+${uuid}@gmail.com`,
      password: 'password',
    });

    const name = await app.header.getUserName();
    expect(name).to.be.eql(`John${uuid}`);
  });
});
