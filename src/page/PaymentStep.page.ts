import { $, ElementFinder, promise } from 'protractor';

export class PaymentStepPage {
 private get payByBankWireButton(): ElementFinder {
   return $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
 }

 public goToBankPayment(): promise.Promise<void> {
   return this.payByBankWireButton.click();
 }
}
