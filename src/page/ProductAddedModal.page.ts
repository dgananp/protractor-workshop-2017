import { $, ElementFinder, promise, browser, ExpectedConditions} from 'protractor';

export class ProductAddedModalPage {
 private get proccedToCheckoutButton(): ElementFinder {  
  return $('[style*="display: block;"] .button-container > a');
 }

 public goToSummaryStep(): promise.Promise<void> {
   browser.wait(ExpectedConditions.elementToBeClickable(this.proccedToCheckoutButton), 5000, 'Element not clickable');
   return this.proccedToCheckoutButton.click();
 }
}
