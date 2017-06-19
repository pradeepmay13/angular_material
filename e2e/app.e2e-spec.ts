import { RoutesProjectPage } from './app.po';

describe('routes-project App', () => {
  let page: RoutesProjectPage;

  beforeEach(() => {
    page = new RoutesProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
