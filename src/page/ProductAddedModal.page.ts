import { $, ElementFinder, promise } from 'protractor';

export class ProductAddedModalPage {
 private get proccedToCheckout(): ElementFinder {
   return $('[style*="display: block;"] .button-container > a');
 }

 public goToSummaryStep(): promise.Promise<void> {
   return this.proccedToCheckout.click();
 }
}
