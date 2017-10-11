import { $, ElementFinder, promise, ExpectedConditions, browser } from 'protractor';

export class MenuContentPage {
 private get tShirtMenu(): ElementFinder {
  return $('#block_top_menu > ul > li:nth-child(3) > a');
 }

 public goToTShirtMenu(): promise.Promise<void> {
   browser.wait(ExpectedConditions.elementToBeClickable(this.tShirtMenu));
   return this.tShirtMenu.click();
 }
}
