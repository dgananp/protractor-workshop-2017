import { browser, Config } from 'protractor';
import { reporter }   from './helpers/reporter';

export const config: Config = {
 framework: 'jasmine',
 SELENIUM_PROMISE_MANAGER: true,
 specs: ['../test/**/*.spec.js'],
 noGlobals: true,
 onPrepare: () => {
   browser.manage().timeouts().implicitlyWait(0)
   browser.ignoreSynchronization = true;
   reporter();
 },
 capabilities: {
  browserName: 'chrome',
  chromeOptions: {
    args: ['--headless', '--disable-gpu', '--window-size=800,600']
  }
 },
 getPageTimeout: 30000,
 jasmineNodeOpts: {
  defaultTimeoutInterval: 120000
 } 
}
