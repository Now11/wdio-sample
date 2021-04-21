const { Button, Input, Text } = require('../elements');

class UserSettingsPage {
  constructor() {
    this.profilePictureField = new Input('[ng-model="$ctrl.formData.image"]');
    this.emailField = new Input('[ng-model="$ctrl.formData.email"]');
    this.descriptionField = new Input('[ng-model="$ctrl.formData.bio"]');
    this.passwordField = new Input('[ng-model="$ctrl.formData.password"]');
    this.updateButton = new Button('[type="submit"]');
    this.bio = new Text('p.ng-binding');
  }

  async updateProfileBio(value) {
    await this.descriptionField.setValue(value);
    await this.updateButton.click();
  }
}

module.exports = { UserSettingsPage };
