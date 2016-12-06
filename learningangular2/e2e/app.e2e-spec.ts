import { Learningangular2Page } from './app.po';

describe('learningangular2 App', function() {
  let page: Learningangular2Page;

  beforeEach(() => {
    page = new Learningangular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
