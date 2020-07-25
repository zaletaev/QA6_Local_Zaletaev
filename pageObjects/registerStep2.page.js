import BasePage from './../pageObjects/Base.page';

class RegisterStep2Page extends BasePage {
  get openDropdown() {
    return $('.ant-select.ant-select-lg.ant-select-single.ant-select-show-arrow');
  }

  get countryDropdown() {
    return $$('.ant-select-item-option-content')[2];
  }

  get phoneNumber() {
    return $('#user_login_phone');
  }

  get SubmitBtn() {
    return $('.ant-btn.ant-btn-primary.ant-btn-lg');
  }

  registerUserStep2(data) {
    // this.openDropdown.click();
    // this.countryDropdown.click();
    this.phoneNumber.setValue(data.phone);
    this.SubmitBtn.click();
  }

  open(path) {
    return super.open('user/register-step2');
  }
}
export default new RegisterStep2Page();
