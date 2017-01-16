var profile_page = function() {

this.profileHrefFind = function() {
    return element(by.xpath('//*[@id="secondary_sections"]/div/nav/div/div/ul[2]/li[2]/a')).getAttribute('href')
  };

this.clickOnLogoutButton = function() {
  element(by.xpath('//*[@id="secondary_sections"]/div/nav/div/div/ul[2]/li[12]/a')).click();
};

}

module.exports = new profile_page();
