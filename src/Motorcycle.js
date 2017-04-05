'use strict';

var Config = require('./Config');
var sprintf = require('sprintf').sprintf;

/**
 * @param {Brand} brand
 * @constructor
 */
function Motorcycle(brand) {
    this.uri = '/motos';
    this.brand = brand;
}

/**
 * @returns {String}
 */
Motorcycle.prototype.getUrl = function() {
    return sprintf('%s%s', Config.baseUrl, this.uri);
};

/**
 * @returns {Brand}
 */
Motorcycle.prototype.getBrand = function() {
    return this.brand;
};

module.exports = Motorcycle;