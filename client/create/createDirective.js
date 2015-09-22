// Personal Data Form
angular.module('createDirective', [])
  .directive('personalDataForm', function(){
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'create/partials/personal-data-form.html'
    };
  });

// Race Form
angular.module('createDirective')
  .directive('metatypeForm', function(){
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'create/partials/metatype-form.html'
    };
  });

// Attributes Form
angular.module('createDirective')
  .directive('attributesForm', function(){
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'create/partials/attributes-form.html'
    };
  });

// Skills Form
angular.module('createDirective')
  .directive('skillsForm', function(){
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'create/partials/skills-form.html'
    };
  });

  // Qualities Form
angular.module('createDirective')
  .directive('qualitiesForm', function(){
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'create/partials/qualities-form.html'
    };
  });

// Items Form
angular.module('createDirective')
  .directive('itemsForm', function(){
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'create/partials/items-form.html'
    };
  });

// Knowledge Form
angular.module('createDirective')
  .directive('knowledgeForm', function(){
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'create/partials/knowledge-form.html'
    };
  });

// Character Display
angular.module('createDirective')
  .directive('characterDisplay', function(){
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'create/partials/character-display.html'
    }
  });
