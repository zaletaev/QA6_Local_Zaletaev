import RegisterPage from "../pageobjects/RegisterPage";
import {homePage, registerPage, user} from "../data/expected";
import {userTC001} from '../data/input';
import LoginPage from '../pageobjects/LoginPage';


xdescribe('REGISTER PAGE', function () {
    before(() => {
        RegisterPage.open();
    })
    it('header text Register Page ', function () {
        const text = RegisterPage.header.getText();
        expect(text).eq(registerPage.header);
    });

    it('should populate fields and submit form', function () {
        RegisterPage.firstNameFld.setValue(user.firstName)
        RegisterPage.lastNameFld.setValue(user.lastName);
        RegisterPage.emailFld.setValue(user.email);
        RegisterPage.passwordFld.setValue(user.password);
        RegisterPage.checkBoxAgreement.click();
        RegisterPage.registerBtn.click();
        browser.pause(3000);
    });
});

describe('TC001 REGISTER NEW USER', function() {
    before(() => {
        RegisterPage.open();
    })
    it('should fill all fields and click SUBMIT', function () {
        RegisterPage.firstNameFld.setValue(userTC001.firstName)
        RegisterPage.lastNameFld.setValue(userTC001.lastName);
        RegisterPage.emailFld.setValue(userTC001.email);
        RegisterPage.passwordFld.setValue(userTC001.password);
        RegisterPage.checkBoxAgreement.click();
        RegisterPage.registerBtn.click();
        RegisterPage.countryFld.waitForDisplayed({ timeout: 3000 });
        RegisterPage.phoneFld.setValue(userTC001.phone);
        RegisterPage.submitBtn.click();
    });

    it('should open pesonal user page', function() {
        LoginPage.alert.waitForDisplayed();
        expect(LoginPage.header.getText()).eq(user.header);
    });

    it('should log in new user', function() {
        LoginPage.open();
        LoginPage.emailFld.setValue(userTC001.email);
        LoginPage.passwordFld.setValue(userTC001.password);
        LoginPage.logInBtn.click();
        LoginPage.alert.waitForDisplayed();
        expect(LoginPage.header.getText()).eq(user.header);
    });
});