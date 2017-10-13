import { browser } from 'protractor';
import { IFramePage } from '../src/page';

describe('JavaScript Excecution', () => {
    describe('Open browser', () => {
      beforeAll(async () => {
        await browser.get('http://toolsqa.com/iframe-practice-page/');
      });

      describe('When I change the height of the iframe', () => {
        const iFramePage = new IFramePage();

        beforeAll(async () => {
          await iFramePage.setIFrameHeight('1500');
        });

        it('then the current heigh is', async () => {
          expect(await iFramePage.getCurrentIFrameHeight()).toBe('1500');
        });
      });
    });
});
