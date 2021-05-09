const { Button, Input } = require('../elements');

class AuthPage {
  constructor() {
    this.nameField = new Input('input[name="name"]');
    this.surnameField = new Input('input[name="surname"]');
    this.birthDateField = new Input('input[name="birthdate"]');
    this.emailField = new Input('input[name="email"]');
    this.passwordField = new Input('input[name="password"]');
    this.retryPasswordField = new Input('input[name="retypePassword"]');
    this.genderDdl = new Button('//span[contains(text(), "Gender")]/following-sibling::div/div');
    this.statusDdl = new Button('//span[contains(text(), "Status")]/following-sibling::div/div');
    this.selectOption = new Button('div.selectStyles__option=TEXT_TO_REPLACE');
    this.phoneField = new Input('input[name="phone"]');
    this.signUpButton = new Button('button=Sign Up');
  }

  async register({ name, email, password, gender, status }) {
    await this.nameField.setValue(name);
    await this.surnameField.setValue('Doctor');
    await this.birthDateField.setValue('11/11/1999');
    await this.emailField.setValue(email);
    await this.passwordField.setValue(password);
    await this.retryPasswordField.setValue(password);
    await this.phoneField.setValue('380000000000');
    await this._selectGender(gender);
    await this._selectStatus(status);
    await this.signUpButton.click();
  }

  async _selectGender(gender) {
    await this.genderDdl.click();
    await this.selectOption.clickWithText(gender);
  }

  async _selectStatus(status) {
    await this.statusDdl.click();
    await this.selectOption.clickWithText(status);
  }
}

module.exports = { AuthPage };
