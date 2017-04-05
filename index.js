'use strict';

require('es6-promise').polyfill();

module.exports = {
    sdk: require('./src/Fipe'),
    vehicleType: require('./src/VehicleTypes')
};

var fipe = require('./src/Fipe');

// fipe.brand('motorcycle').findOneBy('name', 'harley').then(function(res) { console.log(res) });
// fipe.brand('car').findBy('name', 'volks').then(function(res) { console.log(res); });
// fipe.brand('car', 'fiat').then(function(res) { console.log(res); });
// fipe.brand('car').all().then(function(res) { console.log(res); });
// fipe.brand('motorcycle').findOneBy('name', 'harley').then(function(res) { console.log(res); });
fipe.vehicle('car', 'chevrolet').findBy('name', 'Celta').then(function(res) { console.log(res); });