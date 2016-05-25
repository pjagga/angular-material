var chai = require('chai');

//https://github.com/domenic/chai-as-promised/
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;

module.exports = function() {

  //var ptor = protractor.getInstance();

  this.Given(/^I am on the application home page$/, function (callback) {
    browser.get('http://192.168.99.100:8080/');
    callback()
  });

  this.Given(/^I wait for "([^"]*)" seconds$/, function (arg1, callback) {
    browser.sleep(arg1 * 1000);
    callback()
  });

  this.Then(/^I click the "([^"]*)" button$/, function (arg1) {
    return element.all(by.css('button')).getAttribute('aria-label').filter(function(contact) {
      return contact.getText().then(function (text) {
        return text === arg1;
      });
    }).then (function(matchedText){
        return matchedText[0].click();
     return browser.sleep(1 * 1000);
      })
    });

  this.Then(/^I should see "([^"]*)" on icon name/, function (arg1) {
    return element(by.css('[data-test=icon-name] h2')).then(function(iconName) {
      return iconName.getText().then(function (text) {
        return expect(text).to.equal(arg1);
      })
    });
  });

  //this.Then(/^the menu should contain "([^"]*)"$/, function (arg1, callback) {
  //  element.all(by.css('.nav li')).filter(function(elem, index) {
  //    return elem.getText().then(function(text) {
  //      return text === arg1;
  //    });
  //  }).then(function(filteredElements) {
  //    expect(filteredElements).to.have.length(1);
  //    callback();
  //  });
  //});
};