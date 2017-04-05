'use strict';

var Client = require('./Client');
var Search = require('./Search');
var Config = require('./Config');
var sprintf = require('sprintf').sprintf;

/**
 * @param {*} vehicle
 * @constructor
 */
function VehicleRepository(vehicle) {
    this.vehicle = vehicle;
    this.client = new Client();
}

/**
 * @returns {Promise}
 */
VehicleRepository.prototype.all = function() {
    var client = this.client,
        baseUrl = this.vehicle.getUrl(),
        brand = this.vehicle.getBrand();

    return new Promise(function(resolve, reject) {
        brand.findOneBy('name', brand.name)
            .then(function(brandRes) {
                resolve(client.request(sprintf('%s/veiculos/%s.json', baseUrl, brandRes.id)));
            })
            .then(function(res) {
                resolve(res);
            })
        ;
    });
};

/**
 * @param {String} key
 * @param {String} value
 * @returns {Promise}
 */
VehicleRepository.prototype.findBy = function(key, value) {
    var self = this;

    return new Promise(function(resolve, reject) {
        self.all().then(function(carsRes) {
            resolve(Search.find(carsRes, key, value));
        });
    });
};

/**
 * @param {String} key
 * @param {String} value
 * @returns {Promise}
 */
VehicleRepository.prototype.findOneBy = function(key, value) {
    var self = this;

    return new Promise(function(resolve, reject) {
        self.findBy(key, value).then(function(res) {
            resolve(res.shift() || {});
        });
    });
};

module.exports = VehicleRepository;