var app = angular.module('AddressBook', ['ngRoute', 'controllers', 'services']);

app.config(['$routeProvider',
  function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl : 'templates/home.html',
        controller : 'HomeCtrl',
        controllerAs : 'home'
      })
      .otherwise('/');
  }
]);