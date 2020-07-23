export default class Page {
    open(path) {
        browser.url(path);
    }
    get registerBtn () {
        return $('[href="/user/register"]');
    }
    get loginBtn () {
        return $('[href="/user/login"]');
    }
    get header() {
        return $('h1');
    }
}