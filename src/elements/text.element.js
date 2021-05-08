const { BaseElement } = require('./base.element');

class Text extends BaseElement {
  constructor(selector) {
    super(selector);
  }

  async getText() {
    const element = await $(this.selector);
    await this.waitForVisible(element);
    return element.getText();
  }
}

module.exports = {
  Text,
};
