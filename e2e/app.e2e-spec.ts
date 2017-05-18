import { Chensu.DesignPage } from './app.po';

describe('chensu.design App', () => {
  let page: Chensu.DesignPage;

  beforeEach(() => {
    page = new Chensu.DesignPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
