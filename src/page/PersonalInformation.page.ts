import { element, by, ElementFinder} from 'protractor';

interface PersonalInformationInterface {
    firstName: string,
    lastName: string,
    sex: string,
    experience: number,
    profession: string[],
    tools: string[],
    continent: string,
    commands: string[] 
 }

export class PersonalInformationPage {  

 private get firstNameField(): ElementFinder {
   return element(by.name('firstname'));
 }

 private get lastnameField(): ElementFinder {
    return element(by.name('lastname'));
 }

 private  sexRadio(sexName: string): ElementFinder {
    return element(by.css(`[name="sex"][value="${sexName}"]`));
 }

 private experienceRadio(year: number): ElementFinder {
    return element(by.css(`[name="exp"][value="${year}"]`));
 }

 private professionCheck(profession: string): ElementFinder {
    return element(by.css(`[name="profession"][value="${profession}"]`));
 }

 private toolsCheck(tool: string): ElementFinder {
    return element(by.css(`[name="tool"][value="${tool}"]`));
 }

 private continentOption(continent: string): ElementFinder {
    return element(by.id('continents')).element(by.cssContainingText('option', continent));
 }

 private commandsOption(command: string): ElementFinder {
    return element(by.id('selenium_commands')).element(by.cssContainingText('option', command));
 }

 private get submitButton(): ElementFinder {
    return element(by.id('submit'));
 }

 private get contentLabel(): ElementFinder {
  return element(by.id('content')).element(by.tagName('h1'));
 }

 public async getPageTitle(): Promise<string> {
    return this.contentLabel.getText();
 }

 public async fillForm(personalInformation:PersonalInformationInterface): Promise<void> {
    await this.firstNameField.sendKeys(personalInformation.firstName);
    await this.lastnameField.sendKeys(personalInformation.lastName);
    await this.sexRadio(personalInformation.sex).click();                
    await this.experienceRadio(personalInformation.experience).click()
    for (const profession of personalInformation.profession) {
        await this.professionCheck(profession).click();
    }
    for (const tool of personalInformation.tools) {
        await this.toolsCheck(tool).click();
    }
    await this.continentOption(personalInformation.continent).click();            
    for (const command of personalInformation.commands) {                     
        await this.commandsOption(command).click();                                
    }
    await this.submitButton.click();                  
 }
}
