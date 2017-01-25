import { GroceryAppCliPage } from './app.po';

describe('grocery-app-cli App', function() {
  let page: GroceryAppCliPage;

  beforeEach(() => {
    page = new GroceryAppCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    //expect(page.getParagraphText()).toEqual('Welcome to Grocery App');
  });
});
