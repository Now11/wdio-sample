const { app } = require('../src/pages');
const { expect } = require('chai');

const rndNumber = () => Math.floor(Math.random() * (100000 - 1) + 1).toString();

describe('Authorization:', function () {
  beforeEach(async function () {
    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-up');
  });

  afterEach(async function () {
    await browser.reloadSession();
  });

  it('Register new account', async function () {
    const uuid = rndNumber();

    await app.authPage.register({
      name: `John${uuid}`,
      email: `test-email+${uuid}@gmail.com`,
      password: 'password',
      gender: 'female',
      status: 'doctor',
    });

    const name = await app.header.getUserName();
    expect(name).to.be.eql(`John${uuid}`);
  });
});
