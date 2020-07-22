import BasePage from './BasePage';

class LoginPage extends BasePage {

  get header() { return $('h1')};
  get emailFld(){ return $('#normal_login_email')};
  get passwordFld(){ return $('#normal_login_password')};
  get logInBtn(){ return $('//span[contains(text(),"Log in")]')};
  get alert(){ return $('.ant-notification-notice-message') };

  open() {
    super.open('/user/login');
  }
}
export default new LoginPage();
