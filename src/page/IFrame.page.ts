import {ElementFinder, element, by, browser, promise } from 'protractor';

export class IFramePage {
    private get iFrame(): ElementFinder {
        return element(by.id('IF1'));
    }
    
    public async getCurrentIFrameHeight(): Promise<Number> {
        return Number(await this.iFrame.getAttribute('height'));
    }

    public setIFrameHeight(height: Number): promise.Promise<{}> {
         return browser.executeScript(`document.querySelector("#IF1").setAttribute('height', ${height});`);
    }
}