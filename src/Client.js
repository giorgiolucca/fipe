'use strict';

function Client() {
    this.client = require('axios');
}

Client.prototype.request = function(url) {    
    var CircularJSON = require('circular-json'),
        self = this;
    
    return new Promise(function(resolve, reject) {
        self.client(url).then(function (res) { 
            resolve(CircularJSON.stringify(res.data)); 
        });
    })
};

module.exports = Client;