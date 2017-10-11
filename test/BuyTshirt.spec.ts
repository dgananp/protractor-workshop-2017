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

 it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await menuContentPage.goToTShirtMenu();
    await productListPage.goToProducDetail();
    await productDetailPage.goToProductAdded();
    await productAddedModalPage.goToSummaryStep();
    await summaryStepPage.goToSignInStep();
    await signInStepPage.signIn('aperdomobo@gmail.com', 'WorkshopProtractor');
    await addressStepPage.goToShippingStep();
    await shippingStepPage.goToPaymentStep();
    await paymentStepPage.goToBankPayment();
    await bankPaymentPage.goToOrderResume(); 
    
    await expect(orderResumePage.getOrderConfirmation())
      .toBe('Your order on My Store is complete.');
  });
 });
 