const { expect } = require('chai');
const rndNumber = () => Math.floor(Math.random() * (100000 - 1) + 1).toString();

xdescribe('Ragistration:', function () {
  it('Should register user', async function () {
    const uuid = rndNumber();
    const usernameField = await $('[placeholder="Username"]');
    const emailField = await $('[placeholder="Email"]');
    const passwordField = await $('[placeholder="Password"]');
    const signUpButton = await $('[type="submit"]');

    const title = await $('li a.ng-binding');

    await browser.url('https://demo.realworld.io/#/register');
    await browser.pause(3000);

    await usernameField.setValue(`test+${uuid}`);
    await emailField.setValue(`test+${uuid}@gmail.com`);
    await passwordField.setValue('Pa55word');
    await signUpButton.click();
    await browser.pause(3000);

    const profileName = await title.getText();

    expect(profileName).to.eql(`test+${uuid}`);
  });
});
