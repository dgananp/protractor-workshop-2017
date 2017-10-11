import { $, ElementFinder, promise } from 'protractor';

export class SummaryStepPage {
 private get proccedToCheckout(): ElementFinder {
   return $('.cart_navigation span');
 }

 public goToSignInStep(): promise.Promise<void> {
   return this.proccedToCheckout.click();
 }
}
