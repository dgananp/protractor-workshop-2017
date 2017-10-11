import { $, ElementFinder, promise } from 'protractor';

export class ShippingStepPage {

 private get termOfServiceCheck(): ElementFinder {
   return $('#cgv');
 }

 private get proccedToCheckoutButton(): ElementFinder {
  return $('#form > p > button > span');
 }
 
 public goToPaymentStep(): promise.Promise<void> {
    this.termOfServiceCheck.click();
    return this.proccedToCheckoutButton.click(); 
  }
}
