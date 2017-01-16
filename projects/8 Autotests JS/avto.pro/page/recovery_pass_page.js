var recovery_pass_page = function() {

  this.recoveryEmailField = function() { // поле "Password"
    return element(by.xpath('//*[@id="restore-pwd-email"]'));
  };

};

module.exports = new recovery_pass_page();
