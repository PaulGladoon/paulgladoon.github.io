var main_page = function() {

  this.pageUrl = function () { // get URL of page
    return browser.getCurrentUrl();
  }

  this.facebookBtn = function () { // "Facebook" button
    return element(by.xpath('//*[@id="navbar"]/ul/li[2]/a[1]'))
  };

  this.profileDropdownAvatar = function () { // profile "avatar" dropdown button
    return element(by.xpath('//*[@id="navbar"]/ul/li[5]'))
  };

  this.myProfileBtn = function () { // "My Profile" button
    return element(by.xpath('//*[@id="navbar"]/ul/li[5]/ul/li[1]/a'))
  };

  this.myListingBtn = function () { // "My listing" button
    return element(by.xpath('//*[@id="navbar"]/ul/li[5]/ul/li[2]/a'))
  };

  this.bookmarksBtn = function () { // "Bookmarks" button
    return element(by.xpath('//*[@id="navbar"]/ul/li[5]/ul/li[3]/a'))
  };

  this.settingsBtn = function () { // "Settings" button
    return element(by.xpath('//*[@id="navbar"]/ul/li[5]/ul/li[4]/a'))
  };

  this.supportBtn = function () { // "Support" button
    return element(by.xpath('//*[@id="navbar"]/ul/li[5]/ul/li[5]/a'))
  };


};

module.exports = new main_page();
