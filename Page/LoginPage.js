import BasePage from './BasePage';
import userData from './../Data/userData';
class LoginPage extends BasePage{

  get userName() { return $('#normal_login_email')}
  get password() { return $('#normal_login_password')}
  get submitBtn() { return $('[type="submit"]')}
  get header() { return $('h1')}

  open(path) {
    super.open('user/login');
  }

  login() {
    this.open();
    this.userName.setValue(userData.userAdmin.email);
    this.password.setValue(userData.userAdmin.password);
    this.submitBtn.click();

    // browser.pause(2000)
  }
}

export default new LoginPage();