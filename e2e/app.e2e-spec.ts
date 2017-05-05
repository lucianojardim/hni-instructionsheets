import { InstructionSheetsPage } from './app.po';

describe('instruction-sheets App', () => {
  let page: InstructionSheetsPage;

  beforeEach(() => {
    page = new InstructionSheetsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
