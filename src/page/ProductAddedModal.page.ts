import { $, ElementFinder, promise, browser, ExpectedConditions} from 'protractor';

export class ProductAddedModalPage {
 private get proccedToCheckoutButton(): ElementFinder {
  browser.wait(ExpectedConditions.elementToBeClickable($('[style*="display: block;"] .button-container > a')), 5000, 'Element not clickable');
  return $('[style*="display: block;"] .button-container > a');
 }

 public goToSummaryStep(): promise.Promise<void> {
   return this.proccedToCheckoutButton.click();
 }
}
