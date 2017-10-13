import { browser } from 'protractor';
import { PersonalInformationPage } from '../src/page';

describe('workflow', () => {

    describe('Open browser', () => {

      beforeAll(async () => {
        await browser.get('http://toolsqa.com/automation-practice-form/');
      });

      describe('fill Form', () => {
        const personalInformationPage: PersonalInformationPage = new PersonalInformationPage();

        beforeAll(async () => {
          await personalInformationPage.fillForm({
                 firstName: 'Duvan',
                 lastName: 'Perdomo',
                 sex: 'Male',
                 experience: '7',
                 profession: ['Automation Tester'],
                 tools: ['Selenium Webdriver'],
                 continent: 'South America',
                 commands: [ 
                    'Browser Commands',
                    'Navigation Commands',
                    'Switch Commands',
                    'Wait Commands',
                    'WebElement Commands']
          });
        });
        
        it('test finish', async () => {
          expect(await personalInformationPage.getPageTitle()).toBe('Practice Automation Form');
        });
      });  
    });
});