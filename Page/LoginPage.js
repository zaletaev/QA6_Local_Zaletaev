import MainPage from './MainPage';
import userAdmin from './../Data/userData';
class LoginPage extends MainPage{

  get loginBtn() { return $('//a[text()="Login"]')}
  get username() { return $('[id="normal_login_email"]')}
  get password() { return $('[id="normal_login_password"]')}
  get submitBtn() { return $('[type="submit"]')}
  get skipBtn() { return $('//span[text()="Skip"]')}

  open(path) {
    super.open('user/login');
  }

  login() {
    this.open();
    this.username.setValue(userAdmin.email);
    this.password.setValue(userAdmin.password);
    this.submitBtn.click();
  }
}

export default new LoginPage();