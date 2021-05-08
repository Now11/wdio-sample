const assert = require('assert');
const { expect } = require('chai');

const rndNumber = () => Math.floor(Math.random() * (100000 - 1) + 1).toString();

describe('Ragistration:', function () {
  xit('WDIO Test', async function () {
    await browser.url('https://webdriver.io');

    const title = await browser.getTitle();

    assert.strictEqual(
      title,
      'WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO',
    );
  });

  xit('Should register user', async function () {
    const uuid = rndNumber();

    await browser.url('/sign-up');
    await browser.pause(5000);

    const nameField = await $('input[name="name"]');
    const surnameField = await $('input[name="surname"]');
    const birthDateField = await $('input[name="birthdate"]');
    const emailField = await $('input[name="email"]');
    const passwordField = await $('input[name="password"]');
    const retryPasswordField = await $('input[name="retypePassword"]');
    const phoneField = await $('input[name="phone"]');

    //  '//span[contains(text(), "Gender")]/following-sibling::div/div'
    const genderDdl = (await $$('.selectStyles__value-container'))[0];
    //  '//span[contains(text(), "Gender")]/following-sibling::div/div'
    const statusDdl = (await $$('.selectStyles__value-container'))[1];

    const selectMale = await $('div.selectStyles__option=male');
    const selectDoctor = await $('div.selectStyles__option=doctor');

    const signUpButton = await $('button=Sign Up');

    await nameField.setValue(`John${uuid}`);
    await surnameField.setValue('Doctor');
    await birthDateField.setValue('11/11/1999');
    await emailField.setValue(`test-email+${uuid}@gmail.com`);
    await passwordField.setValue('Pa55word');
    await retryPasswordField.setValue('Pa55word');
    await phoneField.setValue('380000000000');

    await genderDdl.click();
    await selectMale.click();

    await statusDdl.click();
    await selectDoctor.click();
    await signUpButton.click();
    await browser.pause(2000);

    const userNameInfo = await $('//div[contains(@class, "header_userInfo")]');
    const name = await userNameInfo.getText();

    expect(name).to.be.eql(`John${uuid}`);
    await browser.pause(5000);
  });

  xit('Should register user', async function () {
    const uuid = rndNumber();

    await browser.url('/sign-up');

    const nameField = await $('input[name="name"]');
    const surnameField = await $('input[name="surname"]');
    const birthDateField = await $('input[name="birthdate"]');
    const emailField = await $('input[name="email"]');
    const passwordField = await $('input[name="password"]');
    const retryPasswordField = await $('input[name="retypePassword"]');
    const phoneField = await $('input[name="phone"]');

    //  '//span[contains(text(), "Gender")]/following-sibling::div/div'
    const genderDdl = (await $$('.selectStyles__value-container'))[0];
    //  '//span[contains(text(), "Gender")]/following-sibling::div/div'
    const statusDdl = (await $$('.selectStyles__value-container'))[1];

    const selectMale = await $('div.selectStyles__option=male');
    const selectDoctor = await $('div.selectStyles__option=doctor');

    const signUpButton = await $('button=Sign Up');

    await nameField.waitForDisplayed({ timeout: 5000 });
    await nameField.setValue(`John${uuid}`);

    await surnameField.waitForDisplayed({ timeout: 5000 });
    await surnameField.setValue('Doctor');

    await birthDateField.waitForDisplayed({ timeout: 5000 });
    await birthDateField.setValue('11/11/1999');

    await emailField.waitForDisplayed({ timeout: 5000 });
    await emailField.setValue(`test-email+${uuid}@gmail.com`);

    await passwordField.waitForDisplayed({ timeout: 5000 });
    await passwordField.setValue('Pa55word');

    await retryPasswordField.waitForDisplayed({ timeout: 5000 });
    await retryPasswordField.setValue('Pa55word');

    await phoneField.waitForDisplayed({ timeout: 5000 });
    await phoneField.setValue('380000000000');

    await genderDdl.waitForDisplayed({ timeout: 5000 });
    await genderDdl.click();

    await selectMale.waitForDisplayed({ timeout: 5000 });
    await selectMale.click();

    await statusDdl.waitForDisplayed({ timeout: 5000 });
    await statusDdl.click();

    await selectDoctor.waitForDisplayed({ timeout: 5000 });
    await selectDoctor.click();

    await signUpButton.waitForDisplayed({ timeout: 5000 });
    await signUpButton.click();

    const userNameInfo = await $('//div[contains(@class, "header_userInfo")]');
    const name = await userNameInfo.getText();

    expect(name).to.be.eql(`John${uuid}`);
  });
});
