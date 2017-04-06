'use strict';

var expect = require('chai').expect;
var nock = require('nock');
var sprintf = require('sprintf').sprintf;
var fipe = require('../../index');
var path = require('path');
var sdk = fipe.sdk;

describe('fipe (unit)', function() {
    describe('when imported', function() {
        it('should return a Object', function() {
            expect(fipe).to.be.a('object');
        });
    });

    describe('when call sdk attribute', function() {
        it('should return a Object', function() {
            expect(sdk).to.be.a('object');
        });
    });

    describe('brand method', function() {
        beforeEach(function() {
            nock('http://fipeapi.appspot.com/api/1')
                .get('/carros/marcas.json')
                .replyWithFile(200, path.join(__dirname, '/fixtures/all-brands.json'));
        });

        describe('when call SDK brand with one parameter (vehicleType)', function() {
            it('should return a BrandRepository', function() {
                expect(sdk.brand('car')).to.be.a('object');
            });
        });

        describe('when use SDK brand with one parameter (vehicleType) and call method all', function() {
            it('should return a Promise', function() {
                expect(sdk.brand('car').all()).to.be.a('Promise');
            });
        });

        describe('when call SDK brand with two parameters (vehicleType, brandName)', function() {
            it('should return a Promise', function() {
                expect(sdk.brand('car', 'fiat')).to.be.a('Promise');
            });

            it('should return info about "FIAT" car brand', function() {
                sdk.brand('car', 'fiat').then(function(res) {
                    expect(res).to.deep.equal({
                        "name":"FIAT",
                        "fipe_name":"Fiat",
                        "order":2,
                        "key":"fiat-21",
                        "id":21
                    })
                });
            });
        });
    });
});