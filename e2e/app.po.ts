import { browser, element, by } from 'protractor';

export class GroceryAppCliPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('grocery-app h1')).getText();
  }
}
