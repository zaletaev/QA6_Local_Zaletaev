import MainPage from './MainPage';



class registerPage extends MainPage{

  open(path) {
    super.open('user/register');
  }

  get firstName(){ return $('[id="user_login_firstName"]')}
  get lastName() { return $('[id="user_login_lastName"]')}
  get email() { return $('[id="user_login_email"]')}
  get password() { return $('[id="user_login_password"]')}
  get checkbox() { return $('[id="user_login_agreement"]')}
  get loginBtn(){ return  $('//span[text()="Register"]') }
  get phone() { return $('[id="user_login_phone"]')}
  get submitBtn(){ return $('[type="submit"]')}
  get skipBtn(){ return $('//a[text()="Skip"]')}
  get header() { return $('//h1')}



}

export default new registerPage();