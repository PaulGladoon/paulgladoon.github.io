var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('chrome').build();

driver.get('http://google.com');
driver.findElement(webdriver.By.name('q')).sendKeys('GO it qa Украина');
driver.findElement(webdriver.By.className('sbico')).click();
driver.wait(webdriver.until.elementLocated({ xpath: '//*[@id="rso"]/div/div/div[1]/div/h3/a' }), 1000);
driver.findElement({ xpath: '//*[@id="rso"]/div/div/div[1]/div/h3/a' }).click();
driver.getTitle().then(function(title) { console.log(title); });
driver.quit();
