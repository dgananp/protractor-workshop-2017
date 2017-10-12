import { browser } from 'protractor';
import { 
  MenuContentPage, 
  SignInStepPage, 
  ProductListPage, 
  ProductDetailPage,
  ProductAddedModalPage, 
  SummaryStepPage, 
  AddressStepPage, 
  ShippingStepPage,
  PaymentStepPage, 
  BankPaymentPage, 
  OrderResumePage
} from '../src/page';

describe('Open browser', () => {
  it('open browser', async () => {
    await browser.get('http://automationpractice.com/');
  });
});

describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productListPage: ProductListPage = new ProductListPage();
  const productDetailPage: ProductDetailPage = new ProductDetailPage();
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();
  

 it('then should be bought a t-shirt', async () => {
    await menuContentPage.goToTShirtMenu();
    await productListPage.goToProducDetail();
    await productDetailPage.goToProductAdded();
    await productAddedModalPage.goToSummaryStep();
    await summaryStepPage.goToSignInStep();
  });
 });
 
 describe('login', () => {
  const signInStepPage: SignInStepPage = new SignInStepPage();
  it('set name and passwd', async () => {
    await signInStepPage.signIn('aperdomobo@gmail.com', 'WorkshopProtractor');
  });
});

describe('address', () => {
  const addressStepPage: AddressStepPage = new AddressStepPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  it('Select Address', async () => {
    await addressStepPage.goToShippingStep();
    await shippingStepPage.goToPaymentStep();
  });
});

describe('BankPayment', () => {
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
  const orderResumePage: OrderResumePage = new OrderResumePage();
  it('BankPayment', async () => {
    await paymentStepPage.goToBankPayment();
    await bankPaymentPage.goToOrderResume(); 
    await expect(orderResumePage.getOrderConfirmation())
      .toBe('Your order on My Store is complete.');
  });
});