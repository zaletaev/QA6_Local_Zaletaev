import BasePage from './Base.page';

class ProfilePage extends BasePage {
  get headerProfile() {
    return $('h1');
  }

  getLoginConfirmation() {
    return this.headerProfile.getText();
  }
}

export default new ProfilePage();
