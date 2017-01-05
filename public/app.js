(function() {
  'use strict';

  var app = angular.module('app', [], function config($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor');
  });

  app.constant('API_URL', 'http://localhost:3000');

  app.controller('MainCtrl', function MainCtrl(RandomUserFactory) {
    'use strict';
    var vm = this;



    function getRandomUser() {
      RandomUserFactory.getRandomUser().then(function(response) {
        vm.randomUser = response.data;
      }, handleError);
    }


    // UTIL FUNCTIONS
    function handleError(response) {
      alert('Error: ' + response.data);
    }
  });

  app.factory('RandomUserFactory', function RandomUserFactory($http, API_URL) {
    'use strict';
    return {
      getRandomUser: getRandomUser
    };

    function getRandomUser() {
      return $http.get(API_URL + '/random-user');
    }
  });



})();
