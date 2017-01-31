var main_page = require('../page/main_page.js');
var facebook_page = require('../page/facebook_page.js');
var myProfile_page = require('../page/myProfile_page.js');
var myListings_page = require('../page/myListings_page.js');
var bookmarks_page = require('../page/bookmarks_page.js');
var settings_page = require('../page/settings_page.js');
var support_page = require('../page/support_page.js');

var EC = protractor.ExpectedConditions;

describe ('Authorization check:', function() {
  beforeEach(function () {
    browser.ignoreSynchronization = true;
    browser.get('http://react.slangwhat.com/');
  });

  afterEach(function () {
    browser.restart();
  });

  it ('Authorization of the user through facebook', function () {
    // prepare
    // act
    main_page.facebookBtn().click();
    browser.getAllWindowHandles().then(function(handles) {
          browser.switchTo().window(handles[1]);
          facebook_page.emailFieldEnterValue('max.klec@do-it.co');
          facebook_page.passwordFieldEnterValue('JustDoIt1000');
          facebook_page.enterBtn().click();
          browser.switchTo().window(handles[0]);
          browser.sleep(2000);
    });

    // assert
    expect(main_page.profileDropdownAvatar().isPresent()).toBe(true);
  });

});

describe ('Redirecting of dropdown menu:', function() {
  beforeEach(function () {
    browser.ignoreSynchronization = true;
    browser.get('http://react.slangwhat.com/');
  });

  afterEach(function () {
    browser.restart();
  });

  it ('Check redirecting of dropdown menu of personal page "My profile"', function () {
    // prepare
    var profileId;
    var pageUrl;

    // act
    main_page.facebookBtn().click();
    browser.getAllWindowHandles().then(function(handles) {
          browser.switchTo().window(handles[1]);
          facebook_page.emailFieldEnterValue('max.klec@do-it.co');
          facebook_page.passwordFieldEnterValue('JustDoIt1000');
          facebook_page.enterBtn().click();
          browser.switchTo().window(handles[0]);
          browser.sleep(2000);
    });
    main_page.profileDropdownAvatar().click();
    profileId = main_page.myProfileBtn().getAttribute('href');
    main_page.myProfileBtn().click();
    browser.sleep(2000);
    pageUrl = myProfile_page.pageUrl();

    // assert
    expect(pageUrl).toBe(profileId);
    expect(myProfile_page.editProfileBtn().isPresent()).toBe(true);
  });

  it ('Check redirecting of dropdown menu of personal page "My Listings"', function () {
    // prepare
    var myListingUrl;
    var pageUrl;

    // act
    main_page.facebookBtn().click();
    browser.getAllWindowHandles().then(function(handles) {
          browser.switchTo().window(handles[1]);
          facebook_page.emailFieldEnterValue('max.klec@do-it.co');
          facebook_page.passwordFieldEnterValue('JustDoIt1000');
          facebook_page.enterBtn().click();
          browser.switchTo().window(handles[0]);
          browser.sleep(2000);
    });
    main_page.profileDropdownAvatar().click();
    myListingUrl = main_page.myListingBtn().getAttribute('href');
    main_page.myListingBtn().click();
    browser.sleep(2000);
    pageUrl = myListings_page.pageUrl();

    // assert
    expect(pageUrl).toBe(myListingUrl);
    expect(myListings_page.addNewListingBox().isPresent()).toBe(true);
  });

  it ('Check redirecting of dropdown menu of personal page "Bookmarks"', function () {
    // prepare
    var bookmarksUrl;
    var pageUrl;

    // act
    main_page.facebookBtn().click();
    browser.getAllWindowHandles().then(function(handles) {
          browser.switchTo().window(handles[1]);
          facebook_page.emailFieldEnterValue('max.klec@do-it.co');
          facebook_page.passwordFieldEnterValue('JustDoIt1000');
          facebook_page.enterBtn().click();
          browser.switchTo().window(handles[0]);
          browser.sleep(2000);
    });
    main_page.profileDropdownAvatar().click();
    bookmarksUrl = main_page.bookmarksBtn().getAttribute('href');
    main_page.bookmarksBtn().click();
    browser.sleep(2000);
    pageUrl = bookmarks_page.pageUrl();

    // assert
    expect(pageUrl).toContain(bookmarksUrl);
    expect(bookmarks_page.bookmarksPageNumber().isPresent()).toBe(true);
  });

  it ('Check redirecting of dropdown menu of personal page "Settings"', function () {
    // prepare
    var settingsUrl;
    var pageUrl;

    // act
    main_page.facebookBtn().click();
    browser.getAllWindowHandles().then(function(handles) {
          browser.switchTo().window(handles[1]);
          facebook_page.emailFieldEnterValue('max.klec@do-it.co');
          facebook_page.passwordFieldEnterValue('JustDoIt1000');
          facebook_page.enterBtn().click();
          browser.switchTo().window(handles[0]);
          browser.sleep(2000);
    });
    main_page.profileDropdownAvatar().click();
    settingsUrl = main_page.settingsBtn().getAttribute('href');
    main_page.settingsBtn().click();
    browser.sleep(2000);
    pageUrl = settings_page.pageUrl();

    // assert
    expect(pageUrl).toContain(settingsUrl);
    expect(settings_page.settingsTitle().isPresent()).toBe(true);
  });

  it ('Check redirecting of dropdown menu of personal page "24/7 Support"', function () {
    // prepare
    var supportUrl;
    var pageUrl;

    // act
    main_page.facebookBtn().click();
    browser.getAllWindowHandles().then(function(handles) {
          browser.switchTo().window(handles[1]);
          facebook_page.emailFieldEnterValue('max.klec@do-it.co');
          facebook_page.passwordFieldEnterValue('JustDoIt1000');
          facebook_page.enterBtn().click();
          browser.switchTo().window(handles[0]);
          browser.sleep(2000);
    });
    main_page.profileDropdownAvatar().click();
    supportUrl = main_page.supportBtn().getAttribute('href');
    main_page.supportBtn().click();
    browser.sleep(2000);
    pageUrl = support_page.pageUrl();

    // assert
    expect(pageUrl).toContain(supportUrl);
    expect(support_page.supportTitle().isPresent()).toBe(true);
  });

});
