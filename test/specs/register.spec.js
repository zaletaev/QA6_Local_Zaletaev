import RegisterPage from '../../Page/RegisterPage';
import userData from '../../Data/userData';
import LoginPage from '../../Page/LoginPage';
import {headers} from '../../Data/registerData';
import ProfilePage from "../../Page/ProfilePage";

describe('register user', () => {
  before( () => {
      RegisterPage.open()
  });

  it('should check header', () => {
    expect($(RegisterPage.header).getText()).toEqual(headers.headerRegister)
  });

  it('should fill out filds and click submit btn', () => {
    RegisterPage.firstName.setValue(userData.userNew.firstName);
    RegisterPage.lastName.setValue(userData.userNew.lastName);
    RegisterPage.email.setValue(userData.userNew.email);
    RegisterPage.password.setValue(userData.userNew.password)
    RegisterPage.checkbox.click();
    RegisterPage.registerBtn.click();
    browser.waitUntil(()=> RegisterPage.hederRegister.isDisplayed())

  });

  it('should have correct header on page step 2', () => {
    expect(RegisterPage.hederRegister.getText()).toEqual(headers.headerStep2Page)
  });

  it('should skip btn be clickable ', () => {
    expect(RegisterPage.skipBtn.isClickable()).toEqual(true)
  });

  it('should fill out form', () => {
    RegisterPage.phone.setValue(userData.userNew.phone)
    RegisterPage.submitBtn.click()
    browser.waitUntil(()=> ProfilePage.header.getText()) === userData.userNew.headerName
  });

  it('should login new user', () => {
    LoginPage.open()
    LoginPage.userName.setValue(userData.userNew.email)
    LoginPage.password.setValue(userData.userNew.password)
    LoginPage.submitBtn.click();
    browser.waitUntil(()=> ProfilePage.header.getText()===userData.userNew.headerName)
  });


});