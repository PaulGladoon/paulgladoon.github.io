var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('chrome').build()

driver.get('http://google.com').then(function() {
  console.log('1.Get to google.com --> PASSED')
});
driver.findElement(webdriver.By.name('q')).sendKeys('GO it qa Украина').then(function() {
  console.log('2.Enter the Keys --> PASSED')
});
driver.findElement(webdriver.By.className('sbico')).click().then(function() {
  console.log('3.Click on search btn --> PASSED')
});
driver.wait(webdriver.until.elementLocated({ xpath: '//*[@id="rso"]/div/div/div[1]/div/h3/a' }), 2000);
driver.findElement({ xpath: '//*[@id="rso"]/div/div/div[1]/div/h3/a' }).click().then(function() {
  console.log('4.Click first link --> PASSED')
});
driver.getTitle().then(function(title) {
  console.log('5.Title of webpage --> PASSED');
  console.log(title);
});
driver.quit().then(function() {
  console.log('END TEST')
});
