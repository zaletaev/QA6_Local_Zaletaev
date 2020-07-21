import MainPage from './MainPage';
import userData from './../Data/userData';
class LoginPage extends MainPage{

  get username() { return $('[id="normal_login_email"]')}
  get password() { return $('[id="normal_login_password"]')}
  get submitBtn() { return $('[type="submit"]')}
  get header() { return $('//h1')}

  open(path) {
    super.open('user/login');
  }

  login() {
    this.open();
    this.username.setValue(userData.userAdmin.email);
    this.password.setValue(userData.userAdmin.password);
    this.submitBtn.click();
    browser.pause(2000)
  }
}

export default new LoginPage();