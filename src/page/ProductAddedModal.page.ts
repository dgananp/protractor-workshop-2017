import { $, ElementFinder, promise } from 'protractor';

export class ProductAddedModalPage {
 private get proccedToCheckoutButton(): ElementFinder {
   return $('[style*="display: block;"] .button-container > a');
 }

 public goToSummaryStep(): promise.Promise<void> {
   return this.proccedToCheckoutButton.click();
 }
}
