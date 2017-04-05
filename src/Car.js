'use strict';

var Config = require('./Config');
var sprintf = require('sprintf').sprintf;

/**
 * @param {Brand} brand
 * @constructor
 */
function Car(brand) {
    this.uri = '/carros';
    this.brand = brand;
}

/**
 * @returns {String}
 */
Car.prototype.getUrl = function() {
    return sprintf('%s%s', Config.baseUrl, this.uri);
};

/**
 * @returns {Brand}
 */
Car.prototype.getBrand = function() {
    return this.brand;
};

module.exports = Car;