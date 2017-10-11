import { $, ElementFinder, promise } from 'protractor';

export class ProductDetailPage {
 private get addToCard(): ElementFinder {
   return $('#add_to_cart > button > span');
 }

 public goToProductAdded(): promise.Promise<void> {
   return this.addToCard.click();
 }
}
