import HomePage from "../pageobjects/HomePage";
import {homePage} from "../data/expected";


describe('HOME PAGE MAIN ELEMENTS', function () {
    before(() => {
        HomePage.open();
    })
    it('header text Home Page ', function () {
        const text = HomePage.header.getText();
        expect(text).toEqual(homePage.header);
    });
    it('logo is displayed', function () {
        expect(HomePage.logo.isDisplayed()).toEqual(true);
    });
    it('login button is displayed', function () {
        expect(HomePage.loginBtn.isDisplayed()).toEqual(true);
    });
    it('register button is displayed', function () {
        expect(HomePage.registerBtn.isDisplayed()).toEqual(true);
    });
    it('contact.us button is displayed', function () {
        expect(HomePage.contactBtn.isDisplayed()).toEqual(true);
    });
    it('terms button is displayed', function () {
        expect(HomePage.termsBtn.isDisplayed()).toEqual(true);
    });
    it('privacy button is displayed', function () {
        expect(HomePage.privacyBtn.isDisplayed()).toEqual(true);
    });

});