'use strict';

var Config = require('./Config');
var sprintf = require('sprintf').sprintf;

/**
 * @param {Brand} brand
 * @constructor
 */
function Truck(brand) {
    this.uri = '/caminhoes';
    this.brand = brand;
}

/**
 * @returns {String}
 */
Truck.prototype.getUrl = function() {
    return sprintf('%s%s', Config.baseUrl, this.uri);
};

/**
 * @returns {Brand}
 */
Truck.prototype.getBrand = function() {
    return this.brand;
};

module.exports = Truck;