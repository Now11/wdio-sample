class BaseElement {
  constructor(selector) {
    this.selector = selector;
  }

  async waitForExist(element, timeout = 5000) {
    await element.waitForExist({
      timeout,
      timeoutMsg: `Element with selector ${this.selector} doesn't exist`,
    });
  }

  async waitForVisible(element, timeout = 5000) {
    await this.waitForExist(element);
    await element.waitForDisplayed({
      timeout,
      timeoutMsg: `Element with selector ${this.selector} isn't displayed`,
    });
  }

  async waitForDisappears(element, timeout = 5000) {
    await element.waitForDisplayed({
      timeout,
      timeoutMsg: `Element with selector ${this.selector} still displayed`,
      reverse: true,
    });
  }
}

module.exports = {
  BaseElement,
};
