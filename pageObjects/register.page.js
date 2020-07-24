import BasePage from "./../pageObjects/Base.page";
import {RegisterData} from "../20608/data/DataPage";

class RegisterPage extends BasePage {
    get headerRegister() {
        return $('h1');
    }

    get firstNameInput() {
        return $('#user_login_firstName')
    }

    get lastNameInput() {
        return $('#user_login_lastName')
    }

    get email() {
        return $('#user_login_email')
    }

    get password() {
        return $('#user_login_password')
    }

    get TandAlink() {
        return $('.ant-btn.pl-1.ant-btn-link.ant-btn-sm')
    }

    get TandAlinkClose() {
        return $('[data-icon="close"]')
    }

    get agreement() {
        return $('#user_login_agreement')
    }

    get registerBtn() {
        return $('.ant-btn.ant-btn-primary.ant-btn-lg')
    }

    get countryDropdown() {
        return $$('.ant-select-item-option-content')[5];

    }
    get openDropdown(){
        return  $('.ant-select.ant-select-lg.ant-select-single.ant-select-show-arrow').click();
    }
    get phoneNumber() {
        return $('#user_login_phone')
    }

    get SubmitBtn() {
        return $('.ant-btn.ant-btn-primary.ant-btn-lg')
    }

    termsAndAgreements() {
        this.agreement.click();
        this.TandAlink.click();
        this.TandAlinkClose.waitForDisplayed();
        this.TandAlinkClose.click();
    }
    registerUser(firstName,lastName,email,password,phone) {
        this.firstNameInput.setValue(firstName);
        this.lastNameInput.setValue(lastName);
        this.email.setValue(email);
        this.password.setValue(password);
        this.termsAndAgreements();
        this.registerBtn.click();
        this.openDropdown;
        this.countryDropdown.click();
        this.phoneNumber.setValue(phone);
        this.SubmitBtn.click();

    }

    open(path) {
        return super.open('user/register');
    }

}export default new RegisterPage();