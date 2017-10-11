import { $, ElementFinder, promise } from 'protractor';

export class AddressStepPage {
 private get proccedToCheckout(): ElementFinder {
   return $('#center_column > form > p > button > span');
 }

 public goToShippingStep(): promise.Promise<void> {
   return this.proccedToCheckout.click();
 }
}
