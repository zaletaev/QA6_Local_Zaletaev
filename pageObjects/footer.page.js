import BasePage from './../pageObjects/Base.page';

class FooterPage extends BasePage {
  get footerText() {
    return $('[class="mt-auto mb-15rem"]').getText();
  }

  get contactUs() {
    return $('//footer/a[@href="/contact"]');
  }

  get termsOfService() {
    return $('//footer/a[@href="/terms"]');
  }

  get privacyPolicy() {
    return $('//footer/a[@href="/privacy"]');
  }

  navToContactUs() {
    this.contactUs.click();
  }

  navToTermsOfService() {
    this.termsOfService.click();
  }

  navToPrivacyPolicy() {
    this.privacyPolicy.click();
  }

  //this is to validate navigation

  get contactUsPageHeader() {
    return $('h1');
  }

  get termsOfServicePageHeader() {
    return $('h1');
  }

  get privacyPolicyPageHeader() {
    return $('h1');
  }

  open(path) {
    return super.open('https://stage.localcoding.us/');
  }
}

export default new FooterPage();
