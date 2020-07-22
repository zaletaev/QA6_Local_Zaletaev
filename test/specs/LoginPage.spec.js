import {user} from '../data/expected';
import { loginPage} from '../data/expected';
import LoginPage from '../pageobjects/LoginPage';


describe('LOGIN PAGE', function () {
  before(() => {
    LoginPage.open();
  })
  it('header text Register Page ', function () {
    const text = LoginPage.header.getText();
    expect(text).eq(loginPage.header);
  });

  it('should log in new user', function() {
    LoginPage.open();
    LoginPage.emailFld.setValue(user.email);
    LoginPage.passwordFld.setValue(user.password);
    LoginPage.logInBtn.click();
    LoginPage.alert.waitForDisplayed();
    expect(LoginPage.header.getText()).eq(user.header);
  });
});