import RegisterPage from '../../Page/RegisterPage';
import userData from '../../Data/userData'
import LoginPage from "../../Page/LoginPage";
describe('register user', () => {

  it('should open register page', () => {
    RegisterPage.open()
  });

  it('should fill out filds and click submit btn', () => {
    RegisterPage.firstName.setValue(userData.userNew.firstName);
    RegisterPage.lastName.setValue(userData.userNew.lastName);
    RegisterPage.email.setValue(userData.userNew.email);
    RegisterPage.password.setValue(userData.userNew.password)
    RegisterPage.checkbox.click();
    RegisterPage.loginBtn.click();
    RegisterPage.skipBtn.isClickable()
    RegisterPage.phone.setValue(userData.userNew.phone)
    RegisterPage.submitBtn.click()

  });
  it('should login new user', () => {
   LoginPage.open()
    LoginPage.username.setValue(userData.userNew.email)
    LoginPage.password.setValue(userData.userNew.password)
    LoginPage.submitBtn.click();
    browser.waitUntil(()=> RegisterPage.header.getText()===userData.userNew.header)
  });


});