const { BaseElement } = require('./base.element');

class Button extends BaseElement {
  constructor(selector) {
    super(selector);
  }

  async click() {
    const element = await $(this.selector);
    await this.waitForVisible(element);
    await element.click();
  }
}

module.exports = {
  Button,
};
