class BaseElement {
  constructor(selector) {
    this.selector = selector;
  }

  async waitForVisible(element, timeout = 5000) {
    await element.waitForDisplayed({
      timeout,
      timeoutMsg: "Element isn't displayed",
    });
  }

  async waitForDisappears(element, timeout = 5000) {
    await element.waitForDisplayed({
      timeout,
      timeoutMsg: "Element isn't displayed",
      reverse: true,
    });
  }
}

module.exports = { BaseElement };
