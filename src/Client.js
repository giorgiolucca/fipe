'use strict';

function Client() {
    this.client = fetch;
}

Client.prototype.request = function(url) {    
    return this.client(url).then(function (res) { return res.text(); });
};

module.exports = Client;