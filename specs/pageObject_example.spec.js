const { expect } = require('chai');
const { App } = require('../src/pages');

const rndNumber = () => Math.floor(Math.random() * (100000 - 1) + 1).toString();
const url = 'https://demo.realworld.io/#';

describe('Test Suite:', function () {
  afterEach(async function () {
    await browser.reloadSession();
  });

  it('Should be able to register', async function () {
    const uuid = rndNumber();

    await browser.url(`${url}/register`);

    await App.registrationPage.register({
      username: `test+${uuid}`,
      email: `test+${uuid}@gmail.com`,
      password: 'Pa55word',
    });

    const profileName = await App.homePage.getProfileName();

    expect(profileName).to.eql(`test+${uuid}`);
  });

  it('user should be able to change the settings', async function () {
    const uuid = rndNumber();

    await browser.url(`${url}/register`);

    await App.registrationPage.register({
      username: `test+${uuid}`,
      email: `test+${uuid}@gmail.com`,
      password: 'Pa55word',
    });

    await App.homePage.gotToUserSettings();
    await App.userSettingsPage.updateProfileBio('Some long text');

    const bioText = await App.userSettingsPage.bio.getText();

    expect(bioText).to.eql('Some long text');
  });
});
