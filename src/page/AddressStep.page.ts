import { $, ElementFinder, promise } from 'protractor';

export class AddressStepPage {
 private get proccedToCheckoutButton(): ElementFinder {
   return $('button[name*="processAddress"] > span');
 }

 public goToShippingStep(): promise.Promise<void> {
   return this.proccedToCheckoutButton.click();
 }
}
