import { $, ElementFinder, promise, browser } from 'protractor';

export class MenuContentPage {
 private get tShirtMenu(): ElementFinder {
  var element = $('#block_top_menu > ul > li:nth-child(3) > a');
  browser.wait(browser.ExpectedConditions.elementToBeClickable(element), 5000, 'Element not clickable');
  return element;
 }

 public goToTShirtMenu(): promise.Promise<void> {
   return this.tShirtMenu.click();
 }
}
