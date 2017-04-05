'use strict';

var Client = require('./Client');
var Search = require('./Search');
var sprintf = require('sprintf').sprintf;

/**
 * @param {Brand} brand
 * @constructor
 */
function BrandRepository(brand) {
    this.brand = brand;
    this.client = new Client();
}

/**
 * @returns {Promise}
 */
BrandRepository.prototype.all = function() {
    var url = this.brand.getUrl(),
        client = this.client;

    return new Promise(function(resolve, reject) {
        if (null === url) {
            throw new Error('Vehicle type is not recognized');
        }
        client.request(sprintf('%s.json', url)).then(function(res) {
            resolve(JSON.parse(res));
        }).catch(function(err) {
            reject(err);
        })
    });
};

/**
 * @param {String} key
 * @param {String} value
 * @returns {Promise}
 */
BrandRepository.prototype.findBy = function(key, value) {
    var url = this.brand.getUrl(),
        client = this.client;

    return new Promise(function(resolve, reject) {
        client.request(sprintf('%s.json', url))
            .then(function(res) {
                resolve(Search.find(res, key, value));
            })
            .catch(function(err) {
                reject(err);
            })
        ;
    });
};

/**
 * @param {String} key
 * @param {String} value
 * @returns {Promise}
 */
BrandRepository.prototype.findOneBy = function(key, value) {
    var self = this;

    return new Promise(function(resolve, reject) {
        self.findBy(key, value).then(function(res) {
            resolve(res.shift() || {});
        });
    });
};

module.exports = BrandRepository;