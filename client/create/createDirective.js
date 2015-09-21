// make a directive for each form using restrict: 'E'
angular.module('createDirective',[])
  .directive('raceForm', function(){
    return {
      restrict: 'E',
      // scope: {
      //   race: '='
      // },
      replace: true,
      templateUrl: 'create/partials/race-form.html'
      // controller: function($scope){
      //   // alert($scope.race);
      // }
    };
  });
angular.module('createDirective')
  .directive('skillsForm', function(){
    return {
      restrict: 'E',
      // scope: {
      //   skill: '='
      // },
      replace: true,
      templateUrl: 'create/partials/skills-form.html'
      // controller: function($scope){
      //   // alert('hello');
      // }
    };
  });
angular.module('createDirective')
  .directive('qualitiesForm', function(){
    return {
      restrict: 'E',
      // scope: {
      //   quality: '='
      // },
      replace: true,
      templateUrl: 'create/partials/qualities-form.html'
      // controller: function($scope){
      //   // alert('hello');
      // }
    };
  });

angular.module('createDirective')
  .directive('itemsForm', function(){
    return {
      restrict: 'E',
      // scope: {
      //   item: '='
      // },
      replace: true,
      templateUrl: 'create/partials/items-form.html'
      // controller: function($scope){
      //   // alert('hello');
      // }
    };
  });

angular.module('createDirective')
  .directive('attributesForm', function(){
    return {
      restrict: 'E',
      // scope: {
      //   // add attributes
      // },
      replace: true,
      templateUrl: 'create/partials/attributes-form.html'
      // controller: function($scope){
      //   $scope.showValues = function(){
      //     console.log($scope.character.attributes);
      //   }
      // }
    };
  });

angular.module('createDirective')
  .directive('knowledgeForm', function(){
    return {
      restrict: 'E',
      // scope: {
      //   knowledge: '='
      // },
      replace: true,
      templateUrl: 'create/partials/knowledge-form.html'
      // controller: function($scope){
      //   // alert('hello');
      // }
    };
  });
