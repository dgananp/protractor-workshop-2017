import { $, ElementFinder, promise, browser, ExpectedConditions} from 'protractor';

export class ProductAddedModalPage {
 private get proccedToCheckoutButton(): ElementFinder {
   return $('[title*="Proceed to checkout"]');
 }

 public goToSummaryStep(): promise.Promise<void> {
   browser.wait(ExpectedConditions.elementToBeClickable(this.proccedToCheckoutButton), 5000);
   return this.proccedToCheckoutButton.click();
 }
}
