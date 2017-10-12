import { $, ElementFinder, promise } from 'protractor';

export class PaymentStepPage {
 private get payByBankWireButton(): ElementFinder {
   return $('a.bankwire');
 }

 public goToBankPayment(): promise.Promise<void> {
   return this.payByBankWireButton.click();
 }
}
