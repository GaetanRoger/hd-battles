import { SanitizeHtmlPipe } from './sanitizeHtml.pipe';

describe('SanitizeHtmlPipe', () => {
  it('create an instance', () => {
    const pipe = new SanitizeHtmlPipe();
    expect(pipe).toBeTruthy();
  });
});
