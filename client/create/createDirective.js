// Personal Data Form
angular.module('createDirective', [])
  .directive('personalDataForm', function(){
    return {
      restrict: 'E',
      templateUrl: 'create/partials/forms/personal-data-form.html',
      link: function(scope, elem, attr){
        scope.$watch(function(scope){
          return scope.character.personalData.streetCred;
        }, function(){
          scope.character.personalData.notoriety = scope.character.personalData.streetCred
                                                  + scope.character.personalData.publicAwareness;
        });

        scope.$watch(function (scope){
          return scope.character.personalData.publicAwareness;
        }, function(){
          scope.character.personalData.notoriety = scope.character.personalData.streetCred
                                                  + scope.character.personalData.publicAwareness;
        });
      }
    };
  });

// Metatype Form
angular.module('createDirective')
  .directive('metatypeForm', function(){
    return {
      restrict: 'E',
      templateUrl: 'create/partials/forms/metatype-form.html',
      link: function(scope, elem, attr){
        scope.$watch(function(scope){
          return scope.character.personalData.metatype;
        }, function(){
          if(typeof scope.character.personalData.metatype == 'object'){
            scope.limits.attributes.specialMax = scope.character.personalData.metatype.limit;
            scope.character.personalData.metatype = scope.character.personalData.metatype.metatype;
          }
          console.log('limit', scope.limits);
          if(scope.character.personalData.metatype==='Human'){
            scope.limits.attributes.min= {
                body: '1',
                strength: '1',
                agility: '1',
                reaction: '1',
                intuition: '1',
                charisma: '1',
                wisdom: '1',
                logic: '1',
                will: '1',
                edge: '2'
              };
            scope.limits.attributes.max= {
              body: '6',
              strength: '6',
              agility: '6',
              reaction: '6',
              intuition: '6',
              charisma: '6',
              wisdom: '6',
              logic: '6',
              will: '6',
              edge: '7'
            };
          } else if(scope.character.personalData.metatype==='Elf'){
            scope.limits.attributes.min= {
              body: '1',
              strength: '1',
              agility: '2',
              reaction: '1',
              intuition: '1',
              charisma: '3',
              wisdom: '1',
              logic: '1',
              will: '1',
              edge: '1'
            };
            scope.limits.attributes.max= {
              body: '6',
              strength: '6',
              agility: '7',
              reaction: '6',
              intuition: '6',
              charisma: '8',
              wisdom: '6',
              logic: '6',
              will: '6',
              edge: '6'
            };
          } else if(scope.character.personalData.metatype==='Dwarf'){
            scope.limits.attributes.min= {
              body: '3',
              strength: '3',
              agility: '1',
              reaction: '1',
              intuition: '1',
              charisma: '1',
              wisdom: '1',
              logic: '1',
              will: '2',
              edge: '1'
            };
            scope.limits.attributes.max= {
              body: '8',
              strength: '8',
              agility: '6',
              reaction: '5',
              intuition: '6',
              charisma: '6',
              wisdom: '6',
              logic: '6',
              will: '7',
              edge: '6'
            };
          } else if(scope.character.personalData.metatype==='Ork'){
            scope.limits.attributes.min= {
              body: '4',
              strength: '3',
              agility: '1',
              reaction: '1',
              intuition: '1',
              charisma: '1',
              wisdom: '1',
              logic: '1',
              will: '1',
              edge: '1'
            };
            scope.limits.attributes.max= {
              body: '9',
              strength: '8',
              agility: '6',
              reaction: '6',
              intuition: '6',
              charisma: '5',
              wisdom: '6',
              logic: '5',
              will: '6',
              edge: '6'
            };
          } else if(scope.character.personalData.metatype==='Troll'){
            scope.limits.attributes.min= {
              body: '5',
              strength: '5',
              agility: '1',
              reaction: '1',
              intuition: '1',
              charisma: '1',
              wisdom: '1',
              logic: '1',
              will: '1',
              edge: '1'
            };
            scope.limits.attributes.max= {
              body: '10',
              strength: '10',
              agility: '5',
              reaction: '6',
              intuition: '6',
              charisma: '4',
              wisdom: '5',
              logic: '5',
              will: '6',
              edge: '6'
            }
          }
        });
      }
    };
  });

// Attributes Form
angular.module('createDirective')
  .directive('attributesForm', function(){
    return {
      restrict: 'E',
      templateUrl: 'create/partials/forms/attributes-form.html',
      link: function(scope, elem, attr){
        // Attributes $watch
        scope.$watch(function(scope){
          var totalSpent = scope.character.attributes.body-scope.limits.attributes.min.body;
          totalSpent += scope.character.attributes.strength-scope.limits.attributes.min.strength;
          totalSpent += scope.character.attributes.agility-scope.limits.attributes.min.agility;
          totalSpent += scope.character.attributes.reaction-scope.limits.attributes.min.reaction;
          totalSpent += scope.character.attributes.wisdom-scope.limits.attributes.min.wisdom;
          totalSpent += scope.character.attributes.charisma-scope.limits.attributes.min.charisma;
          totalSpent += scope.character.attributes.intuition-scope.limits.attributes.min.intuition;
          totalSpent += scope.character.attributes.will-scope.limits.attributes.min.will;
          scope.limits.attributes.spent = totalSpent;
        });

        // Agility $watch
        scope.$watch(function(scope){
          return scope.character.attributes.agility;
        }, function(){
          scope.character.personalData.walkSpeed = scope.character.attributes.agility*2;
          scope.character.personalData.runSpeed = scope.character.attributes.agility*4;
        });

        // Reaction $watch
        scope.$watch(function(scope){
          return scope.character.attributes.reaction;
        }, function(){
          scope.character.attributes.initiative = Number(scope.character.attributes.reaction
                                                 + scope.character.attributes.intuition)
                                                 + ' + 1d6';
        });

        // Intuition $watch
        scope.$watch(function(scope){
          return scope.character.attributes.intuition;
        }, function(){
          scope.character.attributes.initiative = Number(scope.character.attributes.reaction
                                                 + scope.character.attributes.intuition)
                                                 + ' + 1d6';
          scope.character.attributes.astralInitiative = Number(scope.character.attributes.intuition*2)
                                                       + ' + 2d6';
          scope.character.personalData.judgeIntentions = scope.character.attributes.charisma
                                                        + scope.character.attributes.intuition;
          scope.limits.knowledge = (scope.character.attributes.intuition
                                 + scope.character.attributes.logic)*3;
        });

        // Charisma $watch
        scope.$watch(function(scope){
          return scope.character.attributes.charisma;
        }, function(){
          scope.character.personalData.composure = scope.character.attributes.charisma
                                                  + scope.character.attributes.will;
          scope.character.personalData.judgeIntentions = scope.character.attributes.charisma
                                                        + scope.character.attributes.intuition;
        });

        // Logic $watch
        scope.$watch(function(scope){
          return scope.character.attributes.logic;
        }, function(){
          scope.character.personalData.memory = scope.character.attributes.logic
                                               + scope.character.attributes.will;
          scope.limits.knowledge = (scope.character.attributes.intuition
                                 + scope.character.attributes.logic)*3;
        });

        // Willpower $watch
        scope.$watch(function(scope){
          return scope.character.attributes.will;
        }, function(){
          scope.character.personalData.composure = scope.character.attributes.charisma
                                                  + scope.character.attributes.will;
          scope.character.personalData.memory = scope.character.attributes.logic
                                               + scope.character.attributes.will;
        });

        // Magic $watch
        scope.$watch(function(scope){
          return scope.character.attributes.magic;
        }, function(){
          scope.limits.attributes.special = (scope.character.attributes.magic
                                          - scope.limits.attributes.min.magic)
                                          + (scope.character.attributes.resonance
                                          - scope.limits.attributes.min.resonance)
                                          + (scope.character.attributes.edge
                                          - scope.limits.attributes.min.edge);
        });

        // Resonance $watch
        scope.$watch(function(scope){
          return scope.character.attributes.resonance;
        }, function(){
          scope.limits.attributes.special = (scope.character.attributes.magic
                                          - scope.limits.attributes.min.magic)
                                          + (scope.character.attributes.resonance
                                          - scope.limits.attributes.min.resonance)
                                          + (scope.character.attributes.edge
                                          - scope.limits.attributes.min.edge);
        });

        // Edge $watch
        scope.$watch(function(scope){
          return scope.character.attributes.edge;
        }, function(){
          scope.limits.attributes.special = (scope.character.attributes.magic
                                          - scope.limits.attributes.min.magic)
                                          + (scope.character.attributes.resonance
                                          - scope.limits.attributes.min.resonance)
                                          + (scope.character.attributes.edge
                                          - scope.limits.attributes.min.edge);
        });
      }
    };
  });

// Skills Form
angular.module('createDirective')
  .directive('skillsForm', function(){
    return {
      restrict: 'E',
      templateUrl: 'create/partials/forms/skills-form.html',
      link: function(scope, elem, attr){
        scope.$watch(function(scope){
          return scope.character.activeSkills;
        }, function(){
          scope.limits.skillSpent={group: 0, single: 0};
          for(var i=0; i<scope.character.activeSkills.length; i++){
            if(scope.character.activeSkills[i].group){
              scope.limits.skillSpent.group += scope.character.activeSkills[i].rank;
            } else {
              scope.limits.skillSpent.single += scope.character.activeSkills[i].rank;
            }
          }
        }, true);
      }
    };
  });

  // Qualities Form
angular.module('createDirective')
  .directive('qualitiesForm', function(){
    return {
      restrict: 'E',
      templateUrl: 'create/partials/forms/qualities-form.html'
    };
  });

// Items Form
angular.module('createDirective')
  .directive('itemsForm', function(){
    return {
      restrict: 'E',
      templateUrl: 'create/partials/forms/items-form.html',
      link: function(scope, elem, attr){
        scope.$watch(function(scope){
          return scope.character.items;
        }, function(){
          scope.limits.resourceSpent=0;
          for(var i=0; i<scope.character.items.length; i++){
            scope.limits.resourceSpent += scope.character.items[i].cost
                                        * scope.character.items[i].quantity;
          }
        }, true);
      }
    };
  });

// Knowledge Form
angular.module('createDirective')
  .directive('knowledgeForm', function(){
    return {
      restrict: 'E',
      templateUrl: 'create/partials/forms/knowledge-form.html',
      link: function(scope, elem, attr){
        scope.$watch(function(scope){
          return scope.character.knowledge;
        }, function(){
          scope.limits.knowledgeSpent = 0;
          for(var i=0; i<scope.character.knowledge.length; i++){
            scope.limits.knowledgeSpent += scope.character.knowledge[i].rank;
          }
        }, true)
      }
    };
  });

// Attributes Display
angular.module('createDirective')
  .directive('attributesDisplay', function(){
    return {
      restrict: 'E',
      templateUrl: 'create/partials/displays/attributes-display.html'
    }
  });

// Items Display
angular.module('createDirective')
  .directive('itemsDisplay', function(){
    return {
      restrict: 'E',
      templateUrl: 'create/partials/displays/items-display.html'
    }
  });

// Knowledge Display
angular.module('createDirective')
  .directive('knowledgeDisplay', function(){
    return {
      restrict: 'E',
      templateUrl: 'create/partials/displays/knowledge-display.html'
    }
  });

// Personal Data Display
angular.module('createDirective')
  .directive('personalDataDisplay', function(){
    return {
      restrict: 'E',
      templateUrl: 'create/partials/displays/personal-data-display.html'
    }
  });

// Qualities Display
angular.module('createDirective')
  .directive('qualitiesDisplay', function(){
    return {
      restrict: 'E',
      templateUrl: 'create/partials/displays/qualities-display.html'
    }
  });

// Skills Display
angular.module('createDirective')
  .directive('skillsDisplay', function(){
    return {
      restrict: 'E',
      templateUrl: 'create/partials/displays/skills-display.html'
    }
  });

// Priority Table
angular.module('createDirective')
  .directive('priorityTable', function(){
    return {
      restrict: 'E',
      templateUrl: 'create/partials/forms/priority-table.html'
    }
  })

angular.module('createDirective')
  .directive('tableHighlight', function(){
    return {
      restrict: 'A',
      link: function(scope, elem, attr){
        elem.bind('click', function(){
          elem.toggleClass('highlight');
        })
      }
    }
  })
