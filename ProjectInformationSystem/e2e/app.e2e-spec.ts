import { ProjectInformationSystemPage } from './app.po';

describe('project-information-system App', function() {
  let page: ProjectInformationSystemPage;

  beforeEach(() => {
    page = new ProjectInformationSystemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
