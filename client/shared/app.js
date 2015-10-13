angular.module('shadowrunApp', ['ngRoute', 'createDirective'])
  .config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'home/home.html',
      controller: 'HomeController'
    })
    .when('/combat', {
      templateUrl: 'combat/combat.html',
      controller: 'CombatController'
    })
    .when('/create', {
      templateUrl: 'create/create.html',
      controller: 'CreateController'
    })
    .when('/characters', {
      templateUrl: 'characters/characters.html',
      controller: 'CharactersController'
    })
    .when('/login', {
      templateUrl: 'auth/partials/login.html',
      controller: 'LoginController'
    })
    .when('/logout', {
      controller: 'LogOutController'
    })
    .when('/register', {
      templateUrl: 'auth/partials/register.html',
      controller: 'RegisterController'
    })
    .otherwise({
      redirectTo: '/'
    });
    // $locationProvider.html5Mode(true);
});
