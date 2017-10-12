import { $, ElementFinder, promise } from 'protractor';

export class ProductListPage {
 private get chooseProductButton(): ElementFinder {
   return $('a.product_img_link > img');
 }

 public goToProducDetail(): promise.Promise<void> {
   return this.chooseProductButton.click();
 }
}
