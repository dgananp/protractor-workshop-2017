import { $, ElementFinder, promise, ElementArrayFinder, $$ } from 'protractor';

export class ProductListPage {
 private get chooseProductButton(): ElementFinder {
   return $('a.product_img_link > img');
 }

 private get productContainerList(): ElementArrayFinder {
  return $$('.product-container');
 }

 private  findByProduct(productName: string): ElementFinder {
  return this.productContainerList
         .filter((product: ElementFinder) =>
          product.$('.product-name')
           .getText()
            .then((text: string) => text.includes(productName)))
         .first();
 }

 public selectProduct(productName: string): promise.Promise<void> {
   return this.findByProduct(productName).$('img').click();
 }
}
