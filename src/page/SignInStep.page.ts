import { $, ElementFinder } from 'protractor';

export class SignInStepPage {

 private get email(): ElementFinder {
   return $('#email');
 }

 private get passwd(): ElementFinder {
  return $('#passwd');
 }

 private get submitLogin(): ElementFinder {
  return $('#SubmitLogin > span');
 }

 async  signIn(email, passwd) {
  await this.email.sendKeys(email);
  await this.passwd.sendKeys(passwd);
  await this.submitLogin.click(); 
 }
}
