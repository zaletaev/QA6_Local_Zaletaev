import LoginPage from '../../../pageObjects/login.page';
import ProfilePage from '../../../pageObjects/profile.page';
import user from '../../../testData/user';
import WAIT_TIME_MEDIUM from '../../../testData/waitTimes';

describe('LOGIN', () => {
  before(() => {
    LoginPage.open();
  });

  it('TC-001 Successful login as an admin', () => {
    LoginPage.validLogin(user.admin.email, user.admin.password);
    ProfilePage.badge.waitForDisplayed(WAIT_TIME_MEDIUM);
    expect(ProfilePage.getLoginConfirmation()).eq(user.admin.firstName + ' ' + user.admin.lastName);
  });
});
