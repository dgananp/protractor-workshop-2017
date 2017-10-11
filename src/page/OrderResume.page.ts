import { $, ElementFinder, promise } from 'protractor';

export class OrderResumePage {
 private get orderConfirmation(): ElementFinder {
   return $('#center_column > div > p > strong');
 }

 public getOrderConfirmation(): promise.Promise<String> {
   return this.orderConfirmation.getText();
 }
}
