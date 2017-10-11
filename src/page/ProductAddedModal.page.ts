import { $, ElementFinder, promise, browser } from 'protractor';

export class ProductAddedModalPage {
 private get proccedToCheckoutButton(): ElementFinder {
  var element = $('[style*="display: block;"] .button-container > a');
  browser.wait(browser.ExpectedConditions.elementToBeClickable(element), 5000, 'Element not clickable');
  return element;
 }

 public goToSummaryStep(): promise.Promise<void> {
   return this.proccedToCheckoutButton.click();
 }
}
