'use strict';

var sprintf = require('sprintf').sprintf;
var VehicleFactory = require('./VehicleFactory');

/**
 * @param {String} vehicleType
 * @param {String} name
 * @constructor
 */
function Brand(vehicleType, name) {
    this.vehicleType = vehicleType;
    this.name = name;
}

/**
 * @returns {String}
 */
Brand.prototype.getUrl = function() {
    var vehicle = VehicleFactory.create(this.vehicleType, this);

    if (null === vehicle) {
        return null;
    }
    return sprintf('%s/%s', vehicle.getUrl(), 'marcas');
};

module.exports = Brand;