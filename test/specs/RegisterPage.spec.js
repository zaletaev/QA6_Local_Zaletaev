import RegisterPage from "../pageobjects/RegisterPage";
import {homePage, registerPage, user} from "../data/expected";
import {newUser} from '../data/input';
import LoginPage from '../pageobjects/LoginPage';


describe('REGISTER PAGE', function () {
    before(() => {
        RegisterPage.open();
    })
    it('header text Register Page ', function () {
        const text = RegisterPage.header.getText();
        expect(text).eq(registerPage.header);
    });
    it('should fill all fields and click SUBMIT', function () {
        RegisterPage.firstNameFld.setValue(newUser.firstName)
        RegisterPage.lastNameFld.setValue(newUser.lastName);
        RegisterPage.emailFld.setValue(newUser.email);
        RegisterPage.passwordFld.setValue(newUser.password);
        RegisterPage.checkBoxAgreement.click();
        RegisterPage.registerBtn.click();
        RegisterPage.countryFld.waitForDisplayed({timeout: 3000});
        RegisterPage.phoneFld.setValue(newUser.phone);
        RegisterPage.submitBtn.click();
    });

    it('should open pesonal user page', function () {
        LoginPage.alert.waitForDisplayed();
        expect(LoginPage.header.getText()).eq(user.header);
    });

    it('should log in new user', function () {
        LoginPage.open();
        LoginPage.emailFld.setValue(newUser.email);
        LoginPage.passwordFld.setValue(newUser.password);
        LoginPage.logInBtn.click();
        LoginPage.alert.waitForDisplayed();
        expect(LoginPage.header.getText()).eq(user.header);
    });
});


