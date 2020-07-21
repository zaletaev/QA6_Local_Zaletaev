import RegisterPage from "../pageobjects/RegisterPage";
import {homePage, registerPage, user} from "../data/expected";


describe('REGISTER PAGE', function () {
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