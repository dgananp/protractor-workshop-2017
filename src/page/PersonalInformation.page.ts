import { $, ElementFinder,$$, ElementArrayFinder} from 'protractor';

interface PersonalInformationInterface {
    firstName: string,
    lastName: string,
    sex: string,
    experience: string,
    profession: string[],
    tools: string[],
    continent: string,
    commands: string[] 
 }

export class PersonalInformationPage {  

 private get firstNameField(): ElementFinder {
   return $('[name*="firstname"]');
 }

 private get lastnameField(): ElementFinder {
    return $('[name*="lastname"]');
 }

 private get sexRadio(): ElementArrayFinder {
    return $$('[name*="sex"]')
 }

 private get experienceRadio(): ElementArrayFinder {
    return $$('[name*="exp"]')
 }

 private get professionCheck(): ElementArrayFinder {
    return $$('[name*="profession"]')
 }

 private get toolsCheck(): ElementArrayFinder {
    return $$('[name*="tool"]')
 }

 private get continentOption(): ElementArrayFinder {
    return $$('#continents')
 }

 private get commandsOption(): ElementArrayFinder {
    return $$('#selenium_commands')
 }

 private get submitButton(): ElementArrayFinder {
    return $$('#submit')
 }

 public async getPageTitle(): Promise<string> {
    return $('#content').$('h1').getText();
 }

 public async fillForm(personalInformation:PersonalInformationInterface): Promise<void> {
    await this.firstNameField.sendKeys(personalInformation.firstName);
    await this.lastnameField.sendKeys(personalInformation.lastName);
    await this.sexRadio
                .filter((radio: ElementFinder) => 
                 radio.getAttribute('value')
                  .then((text: string) => text.includes(personalInformation.sex)))
                .first().click();
    await this.experienceRadio
                .filter((radio: ElementFinder) => 
                 radio.getAttribute('value')
                  .then((text: string) => text.includes(personalInformation.experience)))
                .first().click();
    
    for (const profession of personalInformation.profession) {
        await this.professionCheck
                    .filter((check: ElementFinder) => 
                    check.getAttribute('value')
                      .then((text: string) => text.includes(profession)))
                    .first().click();
    }
    for (const tool of personalInformation.tools) {
        await this.toolsCheck
                    .filter((check: ElementFinder) => 
                    check.getAttribute('value')
                      .then((text: string) => text.includes(tool)))
                    .first().click();
    }
    await this.continentOption            
                    .$$('option')
                     .filter((option: ElementFinder) =>                     
                      option.getText()
                       .then((text: string) => text.includes(personalInformation.continent)))
                     .first().click();
    for (const command of personalInformation.commands) {                     
        await this.commandsOption            
                    .$$('option')
                     .filter((option: ElementFinder) =>                     
                      option.getText()
                       .then((text: string) => text.includes(command)))
                     .first().click();  
    }
    await this.submitButton.click();                  
 }
}
