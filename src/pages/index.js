const { RegistrationPage } = require('./registration.page');
const { HomePage } = require('./home.page');
const { UserSettingsPage } = require('./userSettings.page');

class Application {
  constructor() {
    this.registrationPage = new RegistrationPage();
    this.homePage = new HomePage();
    this.userSettingsPage = new UserSettingsPage();
  }
}

exports.App = new Application();
