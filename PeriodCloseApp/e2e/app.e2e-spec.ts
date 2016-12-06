import { PeriodCloseAppPage } from './app.po';

describe('period-close-app App', function() {
  let page: PeriodCloseAppPage;

  beforeEach(() => {
    page = new PeriodCloseAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
