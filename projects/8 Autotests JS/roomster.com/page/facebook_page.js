var facebook_page = function() {

  this.emailFieldEnterValue = function (value) { // data input in the field of email
    element(by.xpath('//*[@id="email"]')).sendKeys(value);
  };

  this.passwordFieldEnterValue = function (value) { // data input in the field of password
    element(by.xpath('//*[@id="pass"]')).sendKeys(value);
  };

  this.enterBtn = function () { // button "Enter"
    return element(by.xpath('//*[@id="loginbutton"]'));
  };

};

module.exports = new facebook_page();
