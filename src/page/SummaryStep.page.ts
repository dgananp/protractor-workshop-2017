import { $, ElementFinder, promise } from 'protractor';

export class SummaryStepPage {
 private get proccedToCheckoutButton(): ElementFinder {
   return $('.cart_navigation span');
 }

 public goToSignInStep(): promise.Promise<void> {
   return this.proccedToCheckoutButton.click();
 }
}
