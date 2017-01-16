var home_page = require('../page/home_page.js');
var profile_page = require('../page/profile_page.js');
var recovery_pass_page = require('../page/recovery_pass_page.js');

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
    browser.sleep(3000);
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
    browser.sleep(3000);
    var profileHref = profile_page.profileHrefFind();

    expect(profileHref).toBe('https://avto.pro/users/profile/195776/personal/');
  });

  it ('The action button "An eye" present and shows and hides the entered password on click', function() {
    home_page.enterLinkClick();
    home_page.regLinkClick();
    home_page.enterPasswordFieldValue('hello123');
    home_page.clickOnEye();
    var passwordValue = home_page.getPasswordFieldAttr('value');
    var passwordInputTypeText = home_page.getPasswordFieldAttr('type');

    expect(passwordValue).toBe('hello123');
    expect(passwordInputTypeText).toBe('text');

    home_page.clickOnEye();
    var passwordInputTypePassword = home_page.getPasswordFieldAttr('type');

    expect(passwordInputTypePassword).toBe('password');
  });

  it ('The link to recovery of the password, form for recovery of the password, are displayed', function() {
    home_page.enterLinkClick();
    home_page.regLinkClick();
    home_page.clickLinkRecoveryPass();

    expect(recovery_pass_page.recoveryEmailField().isPresent()).toBe(true);
  });

  it('Registration of the new user with email of the containing alphabetic characters in a local part', function() {
    home_page.enterLinkClick();
    home_page.regLinkClick();
    home_page.enterEmailFieldValue('qatestqa@gm.com');
    home_page.enterPasswordFieldValue('hello123');
    home_page.clickOnRegButton();
    browser.sleep(3000);
    var profileHref = profile_page.profileHrefFind()

    expect(profileHref).toBe('https://avto.pro/users/profile/195923/personal/');
  });

});
