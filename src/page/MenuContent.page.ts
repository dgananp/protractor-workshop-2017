import { $, ElementFinder, promise, ExpectedConditions, browser } from 'protractor';

export class MenuContentPage {
 private get tShirtMenu(): ElementFinder {
  browser.wait(ExpectedConditions.elementToBeClickable($('#block_top_menu > ul > li:nth-child(3) > a')), 5000, 'Element not clickable');
  return $('#block_top_menu > ul > li:nth-child(3) > a');
 }

 public goToTShirtMenu(): promise.Promise<void> {
   return this.tShirtMenu.click();
 }
}
