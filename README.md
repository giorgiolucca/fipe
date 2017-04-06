# FIPE SDK

[![Build Status](https://travis-ci.org/giorgiolucca/fipe.svg?branch=master)](https://travis-ci.org/giorgiolucca/fipe)

SDK não oficial para a API da FIPE (http://fipeapi.appspot.com/)

# Como utilizar

## Instalação

```sh
    $ npm install --save fipe
```

## Realizando buscas

### Marcas

##### Buscar todas as marcas de carro disponíveis

```sh
    var fipeSdk = require('fipe').sdk;
    
    fipeSdk.brand('car')
        .all()
        .then(function(res) { 
            console.log(res); 
         });     
```

##### Buscar todas as marcas de caminhões disponíveis

```sh
    var fipeSdk = require('fipe').sdk;
    
    fipeSdk.brand('truck')
        .all()
        .then(function(res) { 
            console.log(res); 
        });
```

##### Buscar todas as marcas de motocicletas disponíveis

```sh
    var fipeSdk = require('fipe').sdk;
    fipeSdk.brand('motorcycle')
        .all()
        .then(function(res) { 
            console.log(res); 
        });
```

##### Buscar uma marca específica de carro

```sh
    var fipeSdk = require('fipe').sdk;
    
    fipeSdk.brand('car', 'fiat')
        .then(function(res) { 
            console.log(res); 
        });
```
##### ou 

```sh
    var fipeSdk = require('fipe').sdk;
    
    fipeSdk.brand('car')
        .findOneBy('name', 'volkswagen')
        .then(function(res) { 
            console.log(res); 
        });
```

### Veículos

##### Buscar todos os modelos de uma marca de carro específica

```sh
    var fipeSdk = require('fipe').sdk;
    
    fipeSdk.vehicle('car', 'subaru')
        .all()
        .then(function(res) { 
            console.log(res); 
        });
```

##### Buscar todas as ocorrências de um modelo de carro 

```sh
    var fipeSdk = require('fipe').sdk;
    
    fipeSdk.vehicle('car', 'chevrolet')
        .findBy('name', 'Celta')
        .then(function(res) { 
            console.log(res); 
        });    
```

##### Buscar todos os modelos de uma marca de acordo com o ID informado

```sh
    var fipeSdk = require('fipe').sdk;
    
    fipeSdk.vehicle('car', 'subaru')
        .getModels('2125')
        .then(function(res) { 
            console.log(res); 
        });
```

##### Buscar o modelo do ano informado

```sh
    var fipeSdk = require('fipe').sdk;
    
    fipeSdk.vehicle('car', 'subaru')
        .getYearModel('2125', '2004-2')
        .then(function(res) { 
            console.log(res); 
        });
```