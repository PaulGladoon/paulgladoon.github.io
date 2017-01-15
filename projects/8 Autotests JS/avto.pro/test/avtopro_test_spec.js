var home_page = require('../page/home_page.js');

var EC = protractor.ExpectedConditions;

describe ('To test the dou home page', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('https://dou.ua/')
  });

  it ('Should be able to go to the dou home page', function() {
    expect(home_page.pageUrl()).toBe("https://dou.ua/");
  });

  it ('Should be able to enter text in the search field and confirm', function() {
    home_page.enterSearchFieldValue('QA Engineer');
    var getSearchFieldValue = home_page.valueSearchField();
    expect(getSearchFieldValue).toBe('QA Engineer');
    home_page.enterSearchFieldValue(protractor.Key.ENTER);
    expect(home_page.pageUrl()).toBe("https://dou.ua/search/?q=QA+Engineer");
  });

  describe ('To test the registration box', function() {
    beforeEach(function() {
      browser.get('https://dou.ua/')
    });

    it ('Should be able to open and close the login box', function() {
      home_page.clickRegLink();
      home_page.closeRegBox();
    });

    it ('Should be able to agree and disagree registartion checkbox', function() {
      home_page.clickRegLink();
      var getRegBoxClass = home_page.regBoxClassFind();
      expect(getRegBoxClass).toBe('b-login-dialog');
      home_page.clickConditionsRegCheckbox();
      getRegBoxClass= home_page.regBoxClassFind();
      expect(getRegBoxClass).toBe('b-login-dialog __disabled');
    });

    describe ('To test the registration through social networks', function() {
      beforeEach(function() {
        browser.get('https://dou.ua/');
      });

      it ('Should be able to registration through Facebook', function() {
        home_page.clickRegLink();
        home_page.clickFacebookRegLink();
        browser.getAllWindowHandles().then(function(handles) {
          browser.switchTo().window(handles[1]);
          facebook_page.enterEmailFieldValue('qapaultest@gmail.com');
          facebook_page.enterPasswordFieldValue('7310413freelove');
          facebook_page.clickFacebookLoginBtn();
          facebook_page.clickFacebookConfirmBtn();
        });

        browser.getAllWindowHandles().then(function(handles) {
          browser.switchTo().window(handles[0]);
          var getAttrMinProfile = home_page.attrMinProfile();
          expect(getAttrMinProfile).toBe('https://dou.ua/users/paul-qa/');
        });

      });

    });

  });

});
