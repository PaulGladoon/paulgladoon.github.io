var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('chrome').build();

driver.get('<<LINK TO THE RECIPIENTS PROFILE>>');
driver.findElement(webdriver.By.id('quick_email')).sendKeys('<<YOUR LOGIN>>');
driver.findElement(webdriver.By.id('quick_pass')).sendKeys('<<YOUR PASS>>');
driver.findElement(webdriver.By.id('quick_login_button')).click();
driver.wait(webdriver.until.elementLocated({ className: 'flat_button profile_btn_cut_left' }), 2000);
driver.findElement(webdriver.By.className('flat_button profile_btn_cut_left')).click();
driver.wait(webdriver.until.elementLocated({ id: 'mail_box_editable' }), 2000);
driver.findElement(webdriver.By.id('mail_box_editable')).sendKeys('Hi, it is the autotest!');
driver.findElement(webdriver.By.id('mail_box_send')).click();
driver.quit();
