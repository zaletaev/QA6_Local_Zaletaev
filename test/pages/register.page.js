import Page from "./page";

class RegisterPage extends Page {


    get requiredLabels() {
        return $$('//div[text()="Required"]');
    }

    get firstNameInput() {
        return $('#user_login_firstName');
    }

    get lastNameInput() {
        return $('#user_login_lastName');
    }

    get emailInput() {
        return $('#user_login_email');
    }

    get passwordInput() {
        return $('#user_login_password');
    }

    get submitBtn() {
        return $('button[type="submit"]');
    }

    get agreementCheckbox () {
        return $('#user_login_agreement')
    }

    get agreementLabel () {
        return $('.ant-checkbox-wrapper');
    }

    submitForm() {
        this.submitBtn.click();
    }

    get agreementBtn () {
        return $('button.ant-btn-link');
    }

    get agreementDrawer () {
        return $('div.ant-drawer-body');
    }

    get drawerCloseBtn () {
        return $('button[aria-label="Close"]');
    }



    open() {
        super.open('/user/register');
    }
}

export  default new RegisterPage();