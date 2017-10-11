import { $, ElementFinder, promise } from 'protractor';

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

 public signIn(email, passwd): promise.Promise<void> {
   this.email.sendKeys(email);
   this.passwd.sendKeys(passwd);
   return this.submitLogin.click(); 
 }
}