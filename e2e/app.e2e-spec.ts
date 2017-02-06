import { NgQsPage } from './app.po';

describe('ng-qs App', function() {
  let page: NgQsPage;

  beforeEach(() => {
    page = new NgQsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
