import {ElementFinder, element, by, browser, promise } from 'protractor';

export class IFramePage {
  private get iFrame(): ElementFinder {
    return element(by.id('IF1'));
  }

  private get contentLabel(): ElementFinder {
    return element(by.id('content')).element(by.tagName('h1'));
  }    
   
  public async getPageTitle(): Promise<string> {
    return this.contentLabel.getText();
  }
    
  public async getCurrentIFrameHeight(): Promise<Number> {        
    return Number(await this.iFrame.getAttribute('height'));
  }

  public setIFrameHeight(height: Number): promise.Promise<{}> {
    return browser.executeScript(`document.querySelector("#IF1").setAttribute('height', ${height});`);
  }

  public switchIframe1(){
    browser.switchTo().frame(this.iFrame.getWebElement());
  }

  public switchMainContext(){
      browser.switchTo().defaultContent();
  }
}
