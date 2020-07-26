import BasePage from '../pageObjects/Base.page';
import ProfilePage from '../pageObjects/profile.page';
import RegistrationPage from '../pageObjects/register.page';

class LoginPage extends BasePage {
  get headerLogin() {
    return $('h1');
  }

  get inputUsername() {
    return $('#normal_login_email');
  }

  get inputPassword() {
    return $('#normal_login_password');
  }

  get loginBtn() {
    return $('button[type="submit"]');
  }

  get loginGoogleBtn() {
    return $$('#firebaseui_containerbutton')[0];
  }

  get loginFacebookBtn() {
    return $$('#firebaseui_containerbutton')[1];
  }

  get registerLink() {
    return $$('p>a')[0];
  }

  get resetLink() {
    return $$('p>a')[1];
  }

  get errorMessageCloseBtn() {
    return $('.ant-notification-notice-close');
  }

  open() {
    return super.open('user/login');
  }

  login(username, password) {
    this.inputUsername.setValue(username);
    this.inputPassword.setValue(password);
    this.loginBtn.click();
  }

  validLogin(username, password) {
    this.login(username, password);
    return ProfilePage;
  }

  invalidLogin(username, password) {
    this.login(username, password);
    return LoginPage;
  }

  getLogoutConfirmation() {
    return this.headerLogin.getText();
  }

  closeMessage() {
    this.errorMessageCloseBtn.click();
  }

  goToRegisterPage() {
    this.registerLink.click();
    return RegistrationPage;
  }

  goToResetPasswordPage() {
    this.resetLink.click();
    return ResetPasswordPage; //TODO match to the class to be created and add import
  }
}

export default new LoginPage();
