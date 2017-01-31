var support_page = function() {

  this.pageUrl = function () { // get URL of page
    return browser.getCurrentUrl();
  };

  this.supportTitle = function () { // "24/7 Support" h1 title
    return element(by.xpath('//*[@id="support"]/div[1]/h2'))
  };

};

module.exports = new support_page();
