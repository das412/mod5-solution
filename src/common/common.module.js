(function() {
"use strict";

  angular.module('common', [])
         .constant('ApiPath', 'https://secret-island-73109.herokuapp.com/')
         .config(config);

  config.$inject = ['$httpProvider'];

  function config($httpProvider) {
    $httpProvider.interceptors.push('loadingHttpInterceptor');
  }


})();
