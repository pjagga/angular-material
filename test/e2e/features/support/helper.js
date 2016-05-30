var qasTypeahead = {

  fieldSelector: '[data-test=contacts-search] input',
  typeaheadOptionContainer: '[data-test=contactsSearchResult]',

  get: function get() {
    return element(by.css(this.fieldSelector)).element(by.css(this.typeaheadOptionContainer));
  },

  getEntry: function getEntry(position) {
    return this.getEntriesAsText().get(parseInt(position) - 1);
  },

  getEntries: function getEntries() {
    return this.get().all(by.css('md-button'));
  },

  getEntriesAsText: function getEntriesAsText() {
    return this.getEntries().map(function(option){
      return option.getText();
    });
  }
};

module.exports = qasTypeahead;