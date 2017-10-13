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
          await iFramePage.setIFrameHeight(1500);
        });

        it('then the current heigh is', async () => {
          expect(await iFramePage.getCurrentIFrameHeight()).toBe(1500);
        });

        describe('When i am in the context principal', () =>{ 
          it('then i get Sample Iframe page', async () => {
            expect(await iFramePage.getPageTitle()).toBe('Sample Iframe page');
          });
          describe('When i change to Iframe1', () =>{ 
            
            beforeAll(async () => {
              await iFramePage.switchIframe1();
            });
  
            it('then i get Practice Automation Form', async () => {
              expect(await iFramePage.getPageTitle()).toBe('Practice Automation Form');
            });
            describe('When i return to the context principal', () =>{ 
              
              beforeAll(async () => {
                await iFramePage.switchMainContext();
              });
    
              it('then i get Practice Automation Form', async () => {
                expect(await iFramePage.getPageTitle()).toBe('Sample Iframe page');
              });
            });
          }); 
        });
      });
    });
});
