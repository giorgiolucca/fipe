'use strict';

var Client = require('./Client');
var Search = require('./Search');
var sprintf = require('sprintf').sprintf;
var BrandRepository = require('./BrandRepository');

/**
 * @param {*} vehicle
 * @constructor
 */
function VehicleRepository(vehicle) {
    this.vehicle = vehicle;
    this.client = new Client();
    this.brandRepository = new BrandRepository(vehicle.getBrand());
}

/**
 * @returns {Promise}
 */
VehicleRepository.prototype.all = function() {
    var client = this.client,
        baseUrl = this.vehicle.getUrl(),
        brand = this.vehicle.getBrand(),
        brandRepository = this.brandRepository;

    return new Promise(function(resolve, reject) {
        brandRepository.findOneBy('name', brand.name)
            .then(function(brandRes) {
                resolve(client.request(sprintf('%s/veiculos/%s.json', baseUrl, brandRes.id)));
            })
            .then(function(res) {
                resolve(JSON.parse(JSON.stringify(res || null )));
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