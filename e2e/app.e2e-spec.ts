import { NewLPage } from './app.po';

describe('new-l App', () => {
  let page: NewLPage;

  beforeEach(() => {
    page = new NewLPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
