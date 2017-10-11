import { $, ElementFinder, promise } from 'protractor';

export class ShippingStepPage {

 private get termOfService(): ElementFinder {
   return $('#cgv');
 }

 private get proccedToCheckout(): ElementFinder {
  return $('#form > p > button > span');
 }

 public checkTermOfService(): promise.Promise<void> {
   return this.termOfService.click(); 
 }

 public goToPaymentStep(): promise.Promise<void> {
    return this.proccedToCheckout.click(); 
  }
}