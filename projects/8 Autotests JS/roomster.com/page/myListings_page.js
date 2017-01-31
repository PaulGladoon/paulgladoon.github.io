var myListings_page = function() {

  this.pageUrl = function () { // get URL of page
    return browser.getCurrentUrl();
  };

  this.addNewListingBox = function () { // "Add New Listing +" box
    return element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/div[1]/div/div'))
  };

};

module.exports = new myListings_page();
