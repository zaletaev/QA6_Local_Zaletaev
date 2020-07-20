import RegisterPage from "../pageobjects/RegisterPage";
import {registerPage} from "../data/expected";


describe('REGISTER PAGE', function () {
    before(() => {
        RegisterPage.open();
    })
    it('header text Register Page ', function () {
        const text = RegisterPage.header.getText();
        expect(text).toEqual(registerPage.header);
    });
});