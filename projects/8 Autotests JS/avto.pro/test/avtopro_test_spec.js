var home_page = require('../page/home_page.js');

var EC = protractor.ExpectedConditions;

describe ('Positive testing of registration form', function() {
  beforeEach(function () {
    browser.ignoreSynchronization = true;
    browser.get('https://avto.pro/');
    // browser.close();
  });

  it ('Registration of the user with valid data', function() {
    home_page.regLinkClick();
    home_page.enterEmailFieldValue('autotest@gm.com');
    home_page.enterPasswordFieldValue('hello123');
    home_page.clickOnRegButton();
    browser.sleep(2000);
    var profileHref = home_page.profileHrefFind()
    expect(profileHref).toBe('https://avto.pro/users/profile/195776/personal/');
  });


});

