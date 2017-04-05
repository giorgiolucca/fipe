'use strict';

require('es6-promise').polyfill();

module.exports = {
    sdk: require('./src/Fipe'),
    vehicleType: require('./src/VehicleTypes')
};