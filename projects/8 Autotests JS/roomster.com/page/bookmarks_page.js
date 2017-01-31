var bookmarks_page = function() {

  this.pageUrl = function () { // get URL of page
    return browser.getCurrentUrl();
  };

  this.bookmarksPageNumber = function () { // "Edit Profile" button
    return element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div[1]/div/div/ul/li[2]/a'))
  };

};

module.exports = new bookmarks_page();
