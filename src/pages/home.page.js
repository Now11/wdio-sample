const { Text, Button } = require('../elements');

class HomePage {
  constructor() {
    this.profileName = new Text('li a.ng-binding');
    this.settingsButton = new Button('[href="#/settings"]');
  }

  async getProfileName() {
    return this.profileName.getText();
  }

  async gotToUserSettings() {
    await this.settingsButton.click();
  }
}

module.exports = { HomePage };
