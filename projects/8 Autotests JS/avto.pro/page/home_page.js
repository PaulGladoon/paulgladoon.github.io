var home_page = function() {

  this.enterLinkClick = function() { // клик на ссылку "Вход" вверху формы
    element(by.xpath('//*[@id="secondary_sections"]/div/div[1]/ul/li[1]/a')).click();
  }

  this.regLinkClick = function() { // клик на ссылку "Регистрация" вверху формы
    element(by.css('[data-target="#sign-up-form-container"]')).click();
  };

  this.enterEmailFieldValue = function(value) { // ввод в поле "Email"
    element(by.xpath('//*[@id="sign-up-form-container"]/div/form/label[1]/div[1]/input')).sendKeys(value);
  };

  this.emailField = function() { // поле "Email"
    return element(by.xpath('//*[@id="sign-up-form-container"]/div/form/label[1]/div[1]/input'));
  }

  this.enterPasswordFieldValue = function(value) { // ввод в поле "Password"
    element(by.xpath('//*[@id="sign-up-form-container"]/div/form/label[2]/div[1]/input')).sendKeys(value);
  };

  this.passwordField = function() { // поле "Password"
    return element(by.xpath('//*[@id="sign-up-form-container"]/div/form/label[2]/div[1]/input'));
  }

  this.getPasswordFieldAttr = function(value) { // взять атрибут из поля "Password"
    return element(by.xpath('//*[@id="sign-up-form-container"]/div/form/label[2]/div[1]/input')).getAttribute(value);
  }

  this.clickOnRegButton = function() { // клик на кнопку "Регистрация"
    element(by.xpath('//*[@id="sign-up-form-container"]/div/form/div/button')).click();
  };

  this.clickOnEyeOff = function() { // клик на action копку "Глаз" откл.
    element(by.xpath('//*[@id="sign-up-form-container"]/div/form/label[2]/div[1]/button/i')).click();
  }


};

module.exports = new home_page();
