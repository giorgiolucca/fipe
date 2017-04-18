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
                    expect(res).to.deep.equal({
                        "name":"FIAT",
                        "fipe_name":"Fiat",
                        "order":2,
                        "key":"fiat-21",
                        "id":21
                    });
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
                    expect(res).to.deep.equal({
                        "name":"HARLEY-DAVIDSON",
                        "fipe_name":"HARLEY-DAVIDSON",
                        "order": 2,
                        "key":"harley-davidson-77",
                        "id": 77
                    });
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
                    expect(res).to.deep.equal({
                        "name":"SCANIA",
                        "fipe_name":"SCANIA",
                        "order": 1,
                        "key":"scania-114",
                        "id": 114
                    });
                    done();
                });
            });
        });
    });

    describe('vehicle method', function() {
        describe('when call "getYearModel" method passing model ID and year', function() {
            it('should return info about a car from brand "subaru"', function(done) {
                sdk.vehicle('car', 'subaru').getYearModel('2125', '2004-2').then(function (res) {
                    expect(res).to.deep.equal({
                        "referencia": "abril de 2017",
                        "fipe_codigo": "027039-3",
                        "name": "Forester 2.0 16v 4x4 Turbo Aut.",
                        "combustivel": "Gasolina",
                        "marca": "Subaru",
                        "ano_modelo": "2004",
                        "preco": "R$ 26.610,00",
                        "key": "forester-2004",
                        "time": 0,
                        "veiculo": "Forester 2.0 16v 4x4 Turbo Aut.",
                        "id": "2004"
                    });
                    done();
                });
            });
        });
    })
});