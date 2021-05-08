const { AuthPage } = require('./auth.page');
const { HeaderFragment } = require('./header.fragment');

class Application {
  constructor() {
    this.authPage = new AuthPage();
    this.header = new HeaderFragment();
  }
}

exports.app = new Application();
