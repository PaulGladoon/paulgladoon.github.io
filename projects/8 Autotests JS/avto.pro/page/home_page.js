var home_page = function() {

  this.pageUrl = function() {
    return browser.getCurrentUrl();
  };

  this.enterSearchFieldValue = function(value) {
    element(by.css('input#txtGlobalSearch')).sendKeys(value);
  };

  this.valueSearchField = function() {
    return element(by.css('input#txtGlobalSearch')).getAttribute('value');
  };

//registration block

  this.clickRegLink = function() {
    element(by.css('a#login-link')).click();
  };

  this.closeRegBox = function() {
    element(by.css('div.close.cancel')).click();
  };

  this.clickConditionsRegCheckbox = function() {
    element(by.css('input#agree-checkbox')).click();
  };

  this.regBoxClassFind = function() {
    return element(by.css('div#_loginDialog')).getAttribute('class');
  }

  this.clickFacebookRegLink = function() {
    element(by.css('a#btnFb')).click();
  };

  this.facebookRegLink = function() {
    return element(by.css('a#btnFb'));
  };

  this.clickGoogleRegLink = function() {
    element(by.css('a#btnGoogle')).click();
  };

  this.googleRegLink = function() {
    return element(by.css('a#btnGoogle'));
  };

  this.clickLinkedInRegLink = function() {
    element(by.css('a#btnLinkedIn')).click();
  };

  this.linkedInRegLink = function() {
    return element(by.css('a#btnLinkedIn'))
  };

  this.clickVkRegLink = function() {
    element(by.css('a#btnLoginVk')).click();
  };

  this.vkRegLink = function() {
    return element(by.css('a#btnLoginVk'))
  };

  //profile block

  this.attrMinProfile = function() {
    return element(by.css('a.min-profile')).getAttribute('href');
  };

};
module.exports = new home_page();
