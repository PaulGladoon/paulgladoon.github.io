var myProfile_page = function() {

  this.pageUrl = function () { // get URL of page
    return browser.getCurrentUrl();
  };

  this.editProfileBtn = function () { // "Edit Profile" button
    return element(by.xpath('//*[@id="content"]/div/div[3]/div/div[1]/div/section/article/div/div/a'))
  };

};

module.exports = new myProfile_page();
