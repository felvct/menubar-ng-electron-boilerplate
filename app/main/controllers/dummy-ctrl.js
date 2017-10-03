'use strict';
angular.module('main', ['DummyService'])
.controller('DummyCtrl', function (DummyService) {

  this.title = 'Angular Boilerplate';

  this.helloService = function () {
    DummyService.helloFromService();
  }

});
