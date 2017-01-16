var home_page = require('../page/home_page.js');
var profile_page = require('../page/profile_page.js')

var EC = protractor.ExpectedConditions;

describe ('Positive testing of registration form', function() {
  beforeEach(function () {
    browser.ignoreSynchronization = true;
    browser.get('https://avto.pro/');
  });

  afterEach(function () {
    browser.restart();
  });

  it ('Registration of the user with valid data', function() {
    home_page.enterLinkClick();
    home_page.regLinkClick();
    home_page.enterEmailFieldValue('autotest@gm.com');
    home_page.enterPasswordFieldValue('hello123');
    home_page.clickOnRegButton();
    browser.sleep(2000);
    var profileHref = profile_page.profileHrefFind()

    expect(profileHref).toBe('https://avto.pro/users/profile/195776/personal/');
  });

  it ('Registration confirmations by means of buttons by default', function() {
    home_page.enterLinkClick();
    home_page.regLinkClick();
    home_page.enterEmailFieldValue('autotest@gm.com');
    home_page.emailField().sendKeys(protractor.Key.TAB);
    home_page.enterPasswordFieldValue('hello123');
    home_page.passwordField().sendKeys(protractor.Key.ENTER);
    browser.sleep(2000)
    var profileHref = profile_page.profileHrefFind()

    expect(profileHref).toBe('https://avto.pro/users/profile/195776/personal/');
  });


});
