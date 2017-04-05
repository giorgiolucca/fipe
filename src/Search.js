'use strict';

var jsSearch = require('js-search');

module.exports = {
    /**
     * @param {String} jsonString
     * @param {String} key
     * @param {String} value
     * @returns {String}
     */
    find: function(jsonString, key, value) {
        var search = new jsSearch.Search(key),
            source = JSON.parse(jsonString);

        search.indexStrategy = new jsSearch.PrefixIndexStrategy();
        search.sanitizer = new jsSearch.LowerCaseSanitizer();
        search.searchIndex = new jsSearch.UnorderedSearchIndex();

        search.addIndex(key);
        search.addDocuments(source);

        return search.search(value);
    }
};