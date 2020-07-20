import BasePage from "./BasePage";

class HomePage extends BasePage {

    get logo() {return $('.site-name')};
    get registerBtn() {return $('//a[contains(text(),"Register")]')};
    get loginBtn() {return $('//a[contains(text(),"Login")]')};
    get contactBtn() {return $('//a[contains(text(),"contact us.")]')};
    get termsBtn() {return $('//a[contains(text(),"Terms of Service")]')};
    get privacyBtn() { return $('//a[contains(text(),"Privacy Policy")]')};
    get header() { return $('h1')};

    open() {
        super.open('/');
    }
}

export default new HomePage();