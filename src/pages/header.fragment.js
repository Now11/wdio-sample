class HeaderFragment {
  constructor() {
    this.userNameInfo = '//div[contains(@class, "header_userInfo")]';
  }

  async getUserName() {
    const userNameInfo = await $(this.userNameInfo);
    await userNameInfo.waitForDisplayed({ timeout: 5000 });
    return userNameInfo.getText();
  }
}

module.exports = {
  HeaderFragment,
};
