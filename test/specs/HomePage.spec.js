import HomePage from "../pageobjects/HomePage";

describe('HOME PAGE MAIN ELEMENTS', function () {
    before(() => {
        HomePage.open();
    })
    it('login button is displayed', function () {
        expect(HomePage.loginBtn.isDisplayed()).toEqual(true);
    });
});