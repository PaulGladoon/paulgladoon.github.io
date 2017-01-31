var settings_page = function() {

  this.pageUrl = function () { // get URL of page
    return browser.getCurrentUrl();
  };

  this.settingsTitle = function () { // "Settings" h1 title
    return element(by.xpath('//*[@id="content"]/div/div[3]/div/div/h1'))
  };

};

module.exports = new settings_page();
