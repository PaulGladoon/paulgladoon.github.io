var home_page = function() {

  this.enterLinkClick = function() {
    element(by.xpath('//*[@id="secondary_sections"]/div/div[1]/ul/li[1]/a')).click();
  }

  this.regLinkClick = function() {
    element(by.css('[data-target="#sign-up-form-container"]')).click();
  };

  this.enterEmailFieldValue = function(value) {
    element(by.xpath('//*[@id="sign-up-form-container"]/div/form/label[1]/div[1]/input')).sendKeys(value);
  };

  this.emailField = function() {
    return element(by.xpath('//*[@id="sign-up-form-container"]/div/form/label[1]/div[1]/input'));
  }

  this.enterPasswordFieldValue = function(value) {
    element(by.xpath('//*[@id="sign-up-form-container"]/div/form/label[2]/div[1]/input')).sendKeys(value);
  };

  this.passwordField = function() {
    return element(by.xpath('//*[@id="sign-up-form-container"]/div/form/label[2]/div[1]/input'));
  }

  this.clickOnRegButton = function() {
    element(by.xpath('//*[@id="sign-up-form-container"]/div/form/div/button')).click();
  };


};

module.exports = new home_page();
