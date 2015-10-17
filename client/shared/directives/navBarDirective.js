angular.module('navBarDirective', [])
  .directive('navBar', function(){
    return {
      restrict: 'E',
      templateUrl: 'shared/nav-bar.html',
      controller: ['$scope', '$location', function($scope, $location){
        $scope.isActive = function(viewLocation){
          return viewLocation===$location.path();
        }
      }]
    };
});
