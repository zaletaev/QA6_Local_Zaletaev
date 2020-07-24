import LoginPage from '../../../pageObjects/login.page';
import SecurePage from '../../../pageObjects/secure.page';
import RegisterPage from '../../../pageObjects/register.page';

describe('New user registration page', () => {
  it('Check if the title of the page is Local Coding', () => {
    RegisterPage.open();
    expect(browser.getTitle()).to.equal('Local Coding');
  });
  it('Check if the main text on the page is Create an account', () => {
    expect(RegisterPage.headerRegister.getText()).to.equal('Create an account');
  });
  it('Check if the First Name textbox has a placeholder text First Name ', function() {
    expect(RegisterPage.firstNameInput.getAttribute('placeholder')).to.equal('First Name');
  });
  it('Check if the Last Name textbox has a placeholder text Last Name ', function() {
    expect(RegisterPage.lastNameInput.getAttribute('placeholder')).to.equal('Last Name');
  });
  it('Check if the Email textbox has a placeholder text Email ', function() {
    expect(RegisterPage.email.getAttribute('placeholder')).to.equal('Email');
  });
  it('Check if the Password textbox has a placeholder text Password ', function() {
    expect(RegisterPage.password.getAttribute('placeholder')).to.equal('Password');
  });
});
