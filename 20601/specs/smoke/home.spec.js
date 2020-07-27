import HomePage from '../../../pageObjects/home.page';
import LoginPage from '../../../pageObjects/login.page';
import RegisterPage from '../../../pageObjects/register.page';
import { textHome } from '../../data/home.data';
import { textStep1, textLogin } from '../../data/registerAndLoginData';


describe('', () => {
  before(() => {
    HomePage.open();
  });

  it('verify that Register link open Register Page', function () {
    HomePage.registerLink.click();
    expect(RegisterPage.headerRegister.getText()).eq(textStep1.header);
  });

  xit('should verify that Local Coding Btn returns user back on the Home Page', function () {
    RegisterPage.localCodingBtn.click();
    expect(HomePage.homePageHeader.getText()).contains(textStep1.homePageHeader);
  });

  xit('verify that Login Link open Login Page', function () {
    HomePage.loginLink.click();
    expect(LoginPage.header.getText()).contains(textLogin.header);
  });

  xit('should verify that Local Coding Btn returns user on the Home Page', function () {
    RegisterPage.localCodingBtn.click();
    expect(HomePage.homePageHeader.getText()).contains(textStep1.homePageHeader);
  });

  xit('should verify that Contact Link open Contact Us Page ', function () {
    HomePage.contactUsLink.click();
    expect(HomePage.contactUsHeader.getText()).contains(textHome.contactUsHeader);
  });

  xit('should verify that Privacy Policy link open Privacy Policy Page', function () {
    HomePage.privacyPolicyLink.click();
    expect(HomePage.privacyPolicyHeader.getText()).contains(textHome.privacyPolicyHeader);
  });
});
