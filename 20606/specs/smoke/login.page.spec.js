import LoginPage from '../../../pageObjects/login.page';
import ProfilePage from '../../../pageObjects/profile.page';

const testData = require('../../testData/login.json');
const testResults = require('../../testResult/login.expected.json');

describe('Check login', () => {
  before(() => {
    LoginPage.open();
  });

  it('TC-2: Should check invalid login', function () {
    LoginPage.invalidLogin(testData['TC-2'].username, testData['TC-2'].password);
    LoginPage.closeMessage();
    expect(LoginPage.getLogoutConfirmation()).to.be.equal(testResults['TC-2'].headerText);
  });

  it('TC-1: Should check valid login', function () {
    browser.refresh();
    LoginPage.validLogin(testData['TC-1'].username, testData['TC-1'].password);
    browser.waitUntil(() => browser.getUrl().includes('profile'));
    expect(ProfilePage.getLoginConfirmation()).to.be.equal(testResults['TC-1'].headerText);
  });
});
