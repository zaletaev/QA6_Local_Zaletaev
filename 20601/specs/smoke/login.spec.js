import LoginPage from '../../../pageObjects/login.page';
import ProfilePage from '../../pageObjects/profile.page';
import { textLogin, Admin } from '../../data/registerAndLoginData';
import { textProfile } from '../../data/profile.data';


describe('VERIFY SUCCESSFUL LOGIN', () => {
  it('should register new user and verify login is successful', function () {
    LoginPage.open();
    LoginPage.loginAs(Admin);
    browser.pause(3000);
    // browser.waitUntil(() => ProfilePage.profilePageHeader.isDisplayed());
    expect(ProfilePage.profilePageHeader.getText()).contains(textProfile.header);
  });

  it('should logout from Main Page and return to the Log In Page', function () {
    ProfilePage.dropDownLink.click();
    browser.pause(3000);
    ProfilePage.dropDownItems[2].click();
    browser.pause(3000);
    expect(LoginPage.header.getText()).contains(textLogin.header);
  });
});
