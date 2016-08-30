import { AngularOffcanvasNavbarPage } from './app.po';

describe('angular-offcanvas-navbar App', function() {
  let page: AngularOffcanvasNavbarPage;

  beforeEach(() => {
    page = new AngularOffcanvasNavbarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
