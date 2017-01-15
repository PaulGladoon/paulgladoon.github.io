var facebook_page = function() {

  this.enterEmailFieldValue = function(value) {
    element(by.css('input#email')).sendKeys(value);
  };

  this.enterPasswordFieldValue = function(value) {
    element(by.css('input#pass')).sendKeys(value);
  };

  this.clickFacebookLoginBtn = function() {
    element(by.css('button#loginbutton')).click();
  };

  this.clickFacebookConfirmBtn = function() {
    element(by.buttonText('Continue as Paul')).click();
  };

};
module.exports = new facebook_page();
