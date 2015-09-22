// Personal Data Form
angular.module('createDirective', [])
  .directive('personalDataForm', function(){
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'create/partials/forms/personal-data-form.html'
    };
  });

// Race Form
angular.module('createDirective')
  .directive('metatypeForm', function(){
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'create/partials/forms/metatype-form.html'
    };
  });

// Attributes Form
angular.module('createDirective')
  .directive('attributesForm', function(){
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'create/partials/forms/attributes-form.html'
    };
  });

// Skills Form
angular.module('createDirective')
  .directive('skillsForm', function(){
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'create/partials/forms/skills-form.html'
    };
  });

  // Qualities Form
angular.module('createDirective')
  .directive('qualitiesForm', function(){
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'create/partials/forms/qualities-form.html'
    };
  });

// Items Form
angular.module('createDirective')
  .directive('itemsForm', function(){
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'create/partials/forms/items-form.html'
    };
  });

// Knowledge Form
angular.module('createDirective')
  .directive('knowledgeForm', function(){
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'create/partials/forms/knowledge-form.html'
    };
  });

// Attributes Display
angular.module('createDirective')
  .directive('attributesDisplay', function(){
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'create/partials/displays/attributes-display.html'
    }
  });

// Items Display
angular.module('createDirective')
  .directive('itemsDisplay', function(){
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'create/partials/displays/items-display.html'
    }
  });

// Knowledge Display
angular.module('createDirective')
  .directive('knowledgeDisplay', function(){
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'create/partials/displays/knowledge-display.html'
    }
  });

// Personal Data Display
angular.module('createDirective')
  .directive('personalDataDisplay', function(){
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'create/partials/displays/personal-data-display.html'
    }
  });

// Qualities Display
angular.module('createDirective')
  .directive('qualitiesDisplay', function(){
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'create/partials/displays/qualities-display.html'
    }
  });

// Skills Display
angular.module('createDirective')
  .directive('skillsDisplay', function(){
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'create/partials/displays/skills-display.html'
    }
  });
