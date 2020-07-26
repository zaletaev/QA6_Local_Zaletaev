export default class Page {
    open(path) {
        browser.url(path);
    }
    get registerLink () {
        return $('[href="/user/register"]');
    }
    get loginLink () {
        return $('[href="/user/login"]');
    }
    get header() {
        return $('h1');
    }

    get homePageLink() {
        return $('.site-name');
    }
}