'use strict';

var expect = require('chai').expect;
var sprintf = require('sprintf').sprintf;
var fipe = require('../../index');
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
        describe('when use SDK brand with one parameter (vehicleType) and call method all', function() {
            it('should return a Promise', function(done) {
                expect(sdk.brand('car').all()).to.be.a('Promise');
                done();
            });
        });

        describe('when call SDK "car" brand with "brand name"', function() {
            it('should return a Promise', function(done) {
                expect(sdk.brand('car', 'fiat')).to.be.a('Promise');
                done();
            });

            it('should return info about "FIAT" car brand', function(done) {
                sdk.brand('car', 'fiat').then(function(res) {                    
                    expect(res).to.deep.include({ "key":"fiat-21" });
                    done();
                });
            });
        });

        describe('when call SDK "motorcycle" brand with "brand name"', function() {
            it('should return a Promise', function(done) {
                expect(sdk.brand('motorcycle', 'harley')).to.be.a('Promise');
                done();
            });

            it('should return info about "HARLEY DAVIDSON" motorcycle brand', function(done) {
                sdk.brand('motorcycle', 'harley').then(function(res) {
                    expect(res).to.deep.include({ "key":"harley-davidson-77" });
                    done();
                });
            });
        });

        describe('when call SDK "truck" brand with "brand name"', function() {
            it('should return a Promise', function(done) {
                expect(sdk.brand('truck', 'scania')).to.be.a('Promise');
                done();
            });

            it('should return info about "SCANIA" motorcycle brand', function(done) {
                sdk.brand('truck', 'scania').then(function(res) {
                    expect(res).to.deep.include({ "key":"scania-114" });                        
                    done();
                });
            });
        });
    });

    describe('vehicle method', function() {
        describe('when call "getYearModel" method passing model ID and year', function() {
            it('should return info about a car from brand "subaru"', function(done) {
                sdk.vehicle('car', 'subaru').getYearModel('2125', '2004-2').then(function (res) {                    
                    expect(res).to.deep.include({ "fipe_codigo": "027039-3" });
                    done();
                });
            });
        });
    });
});