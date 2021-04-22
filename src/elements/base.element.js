class BaseElement {
  constructor(selector) {
    this.selector = selector;
  }

  async waitForVisible(element, timeout = 5000) {
    await element.waitForDisplayed({
      timeout,
      timeoutMsg: `Element isn't displayed. Selector: ${this.selector}`,
    });
  }

  async waitForDisappears(element, timeout = 5000) {
    await element.waitForDisplayed({
      timeout,
      timeoutMsg: `Element still displayed. Selector: ${this.selector}`,
      reverse: true,
    });
  }
}

module.exports = { BaseElement };
