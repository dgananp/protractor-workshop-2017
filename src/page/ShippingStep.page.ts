import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {

 private get termOfServiceCheck(): ElementFinder {
   return $('#cgv');
 }

 private get proccedToCheckoutButton(): ElementFinder {
  return $('button[name="processCarrier"] > span');
 }

 public async goToPaymentStep(): Promise<void> {
    await this.termOfServiceCheck.click();
    await this.proccedToCheckoutButton.click(); 
  }
}
