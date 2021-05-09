const { Text } = require('../elements');

class HeaderFragment {
  constructor() {
    this.userNameInfo = new Text('//div[contains(@class, "header_userInfo")]');
  }

  async getUserName() {
    return this.userNameInfo.getText();
  }
}

module.exports = {
  HeaderFragment,
};
