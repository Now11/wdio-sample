const { BaseElement } = require('./base.element');

class Input extends BaseElement {
  constructor(selector) {
    super(selector);
  }

  async setValue(value) {
    const element = await $(this.selector);
    await this.waitForVisible(element);
    await element.setValue(value);
  }
}

module.exports = {
  Input,
};
