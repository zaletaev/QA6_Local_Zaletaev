import LoginPage from '../../../pageObjects/login.page';
import SecurePage from '../../../pageObjects/secure.page';
import RegisterPage from '../../../pageObjects/register.page';

describe('New user registration page', () => {
  it('Check if the title of the page is Local Coding', () => {
    RegisterPage.open();
    expect(browser.getTitle()).eq('Local Coding');
  });
  it('Check if the title of the page is Local Coding', () => {
    RegisterPage.open();
    expect(browser.getTitle()).eq('Local Coding');
  });
});
