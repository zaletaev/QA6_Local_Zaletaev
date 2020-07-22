import BasePage from "./BasePage";


class RegisterPage extends BasePage {


    get header() { return $('h1')};
    get firstNameFld() { return $('#user_login_firstName')};
    get lastNameFld() { return $('#user_login_lastName')};
    get emailFld() { return $('#user_login_email')};
    get passwordFld() { return $('#user_login_password')};
    get checkBoxAgreement() { return $('#user_login_agreement')};
    get registerBtn() { return $('button[type="submit"]')};
    get countryFld(){ return $('.ant-select-selection-item')};
    get phoneFld(){ return $('[type="phone"]')};
    get submitBtn(){ return $('//span[contains(text(),"Submit")]')};


    open() {
        super.open('/user/register');
    }
}

export default new RegisterPage();
