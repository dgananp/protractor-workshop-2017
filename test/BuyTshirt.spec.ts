import { browser } from 'protractor';
import { MenuContentPage, SignInStepPage, ProductListPage, ProductDetailPage,
         ProductAddedModalPage, SummaryStepPage, AddressStepPage, ShippingStepPage,
         PaymentStepPage, BankPaymentPage, OrderResumePage
       } from '../src/page';

describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const signInStepPage: SignInStepPage = new SignInStepPage();
  const productListPage: ProductListPage = new ProductListPage();
  const productDetailPage: ProductDetailPage = new ProductDetailPage();
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();
  const addressStepPage: AddressStepPage = new AddressStepPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
  const orderResumePage: OrderResumePage = new OrderResumePage();

 beforeEach(() => {
   jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
 });

 it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await(browser.sleep(10000));
    await menuContentPage.goToTShirtMenu();
    await(browser.sleep(3000));
    await productListPage.goToProducDetail();
    await(browser.sleep(3000));
    await productDetailPage.goToProductAdded();
    await(browser.sleep(3000));
    await productAddedModalPage.goToSummaryStep();
    await(browser.sleep(3000));
    await summaryStepPage.goToSignInStep();
    await(browser.sleep(3000));

    await signInStepPage.signIn('aperdomobo@gmail.com', 'WorkshopProtractor');
    await(browser.sleep(3000));
   
    await addressStepPage.goToShippingStep();
    await(browser.sleep(3000));
 
    await shippingStepPage.goToPaymentStep();
    await(browser.sleep(3000));
    await paymentStepPage.goToBankPayment();
    await(browser.sleep(3000));
    await bankPaymentPage.goToOrderResume(); 
    await(browser.sleep(3000));
 
    await expect(orderResumePage.getOrderConfirmation())
      .toBe('Your order on My Store is complete.');
  });
 });
 