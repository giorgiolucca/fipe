'use strict';

var VehicleTypes = require('./VehicleTypes');
var Brand = require('./Brand');

module.exports = {
    /**
     * @param {String} vehicleType
     * @param {Brand} brand
     * @returns {Object}
     */
    create: function(vehicleType, brand) {
        var enumObj = VehicleTypes.get(vehicleType.toUpperCase());

        if (typeof enumObj === 'undefined') {
            return null;
        }
        var enumKey = enumObj.key,
            vehicle = require('./' + enumKey.charAt(0).toUpperCase() + enumKey.slice(1).toLowerCase());

        return new vehicle(brand);
    }
};