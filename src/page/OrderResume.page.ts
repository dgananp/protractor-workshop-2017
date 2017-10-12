import { $, ElementFinder, promise } from 'protractor';

export class OrderResumePage {
 private get orderConfirmationLabel(): ElementFinder {
   return $('p.cheque-indent > strong');
 }

 public getOrderConfirmation(): promise.Promise<String> {
   return this.orderConfirmationLabel.getText();
 }
}
