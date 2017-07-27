import { SchedulerAdminPage } from './app.po';

describe('scheduler-admin App', () => {
  let page: SchedulerAdminPage;

  beforeEach(() => {
    page = new SchedulerAdminPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
