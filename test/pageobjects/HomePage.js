import BasePage from "./BasePage";

class HomePage extends BasePage {

    get logo() {return $('.site-name')};
    get registerBtn() {return $('//a[contains(text(),"Register")]')};
    get loginBtn() {return $('//a[contains(text(),"Login")]')};

    open() {
        super.open('/');
    }
}

export default new HomePage();