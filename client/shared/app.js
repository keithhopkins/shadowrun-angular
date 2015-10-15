angular.module('shadowrunApp', ['ngRoute', 'createDirective'])
  .config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'home/home.html',
      controller: 'HomeController',
      access: {restricted: false}
    })
    .when('/combat', {
      templateUrl: 'combat/combat.html',
      controller: 'CombatController',
      access: {restricted: true}
    })
    .when('/create', {
      templateUrl: 'create/create.html',
      controller: 'CreateController',
      access: {restricted: true}
    })
    .when('/characters', {
      templateUrl: 'characters/characters.html',
      controller: 'CharactersController',
      access: {restricted: false}
    })
    .when('/login', {
      templateUrl: 'auth/partials/login.html',
      controller: 'LoginController',
      access: {restricted: false}
    })
    .when('/logout', {
      controller: 'LogOutController',
      access: {restricted: true}
    })
    .when('/register', {
      templateUrl: 'auth/partials/register.html',
      controller: 'RegisterController',
      access: {restricted: false}
    })
    .otherwise({
      redirectTo: '/'
    });
});

angular.module('shadowrunApp')
.run(function ($rootScope, $location, $route, AuthFactory) {
  $rootScope.$on('$routeChangeStart', function (event, next, current) {
    if (next.access.restricted && !AuthFactory.getUserStatus()) {
      $location.path('/login');
      $route.reload();
    }
  });
});
