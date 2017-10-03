'use strict';
var app = angular.module('DummyService', []);
app.service('DummyService', function () {

  this.helloFromService = function () {
    alert('Hello from your DummyService')
  }

});
