import { AngularWikipediaSearchPage } from './app.po';

describe('angular-wikipedia-search App', () => {
  let page: AngularWikipediaSearchPage;

  beforeEach(() => {
    page = new AngularWikipediaSearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
