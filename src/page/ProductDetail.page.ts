import { $, ElementFinder, promise } from 'protractor';

export class ProductDetailPage {
 private get addToCardButton(): ElementFinder {
   return $('#add_to_cart > button > span');
 }

 public goToProductAdded(): promise.Promise<void> {
   return this.addToCardButton.click();
 }
}
