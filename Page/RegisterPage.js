import BasePage from './BasePage';



class registerPage extends BasePage{

  open(path) {
    super.open('user/register');
  }

  get firstName(){ return $('#user_login_firstName')}
  get lastName() { return $('#user_login_lastName')}
  get email() { return $('#user_login_email')}
  get password() { return $('#user_login_password')}
  get checkbox() { return $('#user_login_agreement')}
  get registerBtn(){ return  browser.$('//span[text()="Register"]') }
  get phone() { return $('#user_login_phone')}
  get submitBtn(){ return $('[type="submit"]')}
  get skipBtn(){ return browser.$('//span[text()="Skip"]')}
  get header() { return $('h1')}
  get hederRegister() { return $('h5')}



}

export default new registerPage();