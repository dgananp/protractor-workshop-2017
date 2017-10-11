import { $, ElementFinder, promise } from 'protractor';

export class OrderResumePage {
 private get orderConfirmationLabel(): ElementFinder {
   return $('#center_column > div > p > strong');
 }

 public getOrderConfirmation(): promise.Promise<String> {
   return this.orderConfirmationLabel.getText();
 }
}
