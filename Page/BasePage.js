export default class BasePage {
  open(path) {
    browser.maximizeWindow();
    browser.url(`https://stage.localcoding.us/${path}`);
  }

}