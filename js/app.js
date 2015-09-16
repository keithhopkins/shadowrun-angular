var app = angular.module('shadowrunApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'HomeController'
    })
    .when('/combat', {
      templateUrl: 'views/combat.html',
      controller: 'CombatController'
    })
    .when('/create', {
      templateUrl: 'views/create.html',
      controller: 'CreateController'
    })
    .when('/characters', {
      templateUrl: 'views/characters.html',
      controller: 'CharactersController'
    })
    .otherwise({
      redirectTo: '/'
    });
    $locationProvider.html5Mode(true);
});
