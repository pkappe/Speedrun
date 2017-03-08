import { SpeedrunPage } from './app.po';

describe('speedrun App', function() {
  let page: SpeedrunPage;

  beforeEach(() => {
    page = new SpeedrunPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
