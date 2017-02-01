import { HttpsProxyErrorPage } from './app.po';

describe('https-proxy-error App', function() {
  let page: HttpsProxyErrorPage;

  beforeEach(() => {
    page = new HttpsProxyErrorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
