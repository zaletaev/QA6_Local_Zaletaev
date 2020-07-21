export default class Page {
  open(path) {
    browser.maximizeWindow();
    browser.url(`https://stage.localcoding.us/${path}`);
  }

}