'use strict';

var Brand = require('./Brand');
var BrandRepository = require('./BrandRepository');
var VehicleFactory = require('./VehicleFactory');
var VehicleRepository = require('./VehicleRepository');

module.exports = {
    /**
     * @param {String} vehicleType
     * @param {String} brandName
     * @returns {*}
     */
    brand: function(vehicleType, brandName) {
        var brand = new Brand(vehicleType, brandName),
            name = brandName || null,
            repository = new BrandRepository(brand);

        if (null === name) {
            return repository;
        }
        return repository.findOneBy('name', name);
    },

    /**
     * @param {String} vehicleType
     * @param {String} brandName
     * @returns {VehicleRepository}
     */
    vehicle: function(vehicleType, brandName) {
        return new VehicleRepository(VehicleFactory.create(vehicleType, new Brand(vehicleType, brandName)));
    }
};