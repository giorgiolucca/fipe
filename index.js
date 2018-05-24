'use strict';

require('es6-promise').polyfill();
require('isomorphic-fetch');

module.exports = {
    sdk: require('./src/Fipe'),
    vehicleType: require('./src/VehicleTypes')
};