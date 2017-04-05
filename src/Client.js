'use strict';

function Client() {
    this.client = require('request-promise');
}

Client.prototype.request = function() {
    return this.client.call(this, Array.prototype.slice.call(arguments).shift());
};

module.exports = Client;