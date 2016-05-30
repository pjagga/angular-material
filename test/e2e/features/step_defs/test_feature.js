var chai = require('chai');
var helper = require('../../features/support/helper.js');

//https://github.com/domenic/chai-as-promised/
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;

module.exports = function () {

  this.Given(/^I am on the application home page$/, function (callback) {
    browser.get('http://192.168.99.100:8080/');
    callback()
  });

  this.Given(/^I wait for "([^"]*)" seconds$/, function (arg1, callback) {
    browser.sleep(arg1 * 1000);
    callback()
  });

  this.Then(/^I click the "([^"]*)" contact button$/, function (arg1) {
    return element.all(by.css('button')).getAttribute('aria-label').filter(function (contact) {
      return contact.getText().then(function (text) {
        return text === arg1;
      });
    }).then(function (matchedText) {
      return matchedText[0].click();
      return browser.sleep(1 * 1000);
    })
  });

  this.Then(/^I should see "([^"]*)" on icon name/, function (arg1) {
    return element(by.css('[data-test=icon-name] h2')).then(function (iconName) {
      return iconName.getText().then(function (text) {
        return expect(text).to.equal(arg1);
      })
    });
  });

  this.Then(/^I should (see|not see) new card with "([^"]*)" title/, function (toggle, arg1) {
    return element.all(by.css('md-card md-card-content h3')).filter(function (cardTitle) {
      return cardTitle.getText().then(function (text) {
        return text === arg1;
      });
    }).then(function (matchedText) {
      toggle = toggle === 'see';
      return matchedText[0].isDisplayed().then(function (visible) {
        console.log("visible value " + visible);
        console.log(toggle);
        if (toggle) {
          return expect(visible).to.be.true;
        } else {
          return expect(visible).to.be.false;
        }

      })
    })
  });

  this.Then(/^I click the "([^"]*)" button/, function (field) {
    var selector = field.toLowerCase().replace(' ', '-');
    return element(by.css('[data-test$=' + selector + ']')).then(function (buttonName) {
      return buttonName.click();
    });
  });

  this.Then(/^the "([^"]*)" button is (enabled|disabled)/, function (field, toggle) {
    toggle = toggle === 'enabled';
    var selector = field.toLowerCase().replace(' ', '-');
    return element(by.css('[data-test$=' + selector + ']')).then(function (buttonName) {

      return buttonName.getAttribute('disabled').isPresent().then(function (status) {
        if (toggle) {
          return expect(status).to.be.false;
        } else {
          return expect(status).to.be.true;
        }
      })
    });
  });

  this.Then(/^I click "([^"]*)" tab/, function (tabName) {
    return element.all(by.css('md-tab-item span')).filter(function (tabSpan) {
      return tabSpan.getText().then(function (text) {
        console.log(text);
        return text === tabName;
      })
    }).first().click();
  });

  this.Then(/^I enter "([^"]*)" in the "([^"]*)" input/, function (value, field) {
    var selector = field.toLowerCase().replace(' ', '-');
    return element(by.css('[data-test$=' + selector + '] input')).then(function (selectedField) {
      return selectedField.sendKeys(value)
    });
  });

  this.Then(/^I enter "([^"]*)" in search contact field/, function (value) {
    return element(by.css('[data-test=contacts-search] input')).then(function (selectedField) {
      return selectedField.sendKeys(value)
    });
  });

  this.When(/^I select "([^"]*)" from the contact lookup$/, function (entryToSelect) {
    return helper.get()
      .then(function (lookup) {
        return browser.wait(protractor.ExpectedConditions.visibilityOf(lookup.get()), 5000)
          .then(function () {
            return helper.getEntriesAsText()
              .then(function (qasResults) {
                var position = qasResults.indexOf(entryToSelect)
                if (position === -1) {
                  return assert.fail();
                } else {
                  return lookup.getEntry(position + 1).click();
                }
              });
          });
      });
  });


  this.Then(/^I should see the "([^"]*)" toast message/, function (message) {
    browser.ignoreSynchronization = true;
    return browser.sleep(1000).then(function () {
      return element(by.css('md-toast .md-toast-content span')).then(function (toast) {
        return toast.getText().then(function (text) {
          return expect(text).to.contain(message);
        })
      });
    }).then(function () {
      browser.ignoreSynchronization = false;
    })
  });
};