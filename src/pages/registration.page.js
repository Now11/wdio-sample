const { Button, Input } = require('../elements');

class RegistrationPage {
  constructor() {
    this.usernameField = new Input('[placeholder="Username"]');
    this.emailField = new Input('[placeholder="Email"]');
    this.passwordField = new Input('[placeholder="Password"]');
    this.submitButton = new Button('[type="submit"]');
  }

  async register({ username, email, password }) {
    await this.usernameField.setValue(username);
    await this.emailField.setValue(email);
    await this.passwordField.setValue(password);
    await this.submitButton.click();
  }
}

module.exports = { RegistrationPage };
