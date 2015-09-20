angular.module('shadowrunApp')
.factory('characterFactory', function(){
  var characters = [];
  var factory = {};
  factory.getCharacter = function(){
    // should return the character that we want to modify
    // needs to be updated
    return characters;
  };
  factory.postCharacter = function(character){
    
  };
  return factory;
})
.controller('CreateController', function($scope, characterFactory){
  $scope.character = {
    race: $scope.race,
    attributes: {
      body: $scope.body,
      strength: $scope.strength,
      agility: $scope.agility,
      reaction: $scope.reaction,
      intuition: $scope.intuition,
      charisma: $scope.charisma,
      wisdom: $scope.wisdom,
      logic: $scope.logic,
      will: $scope.will,
      magic: $scope.magic,
      resonance: $scope.resonance,
      edge: $scope.edge
    },
    activeSkills: [],
    qualities: [],
    items: [],
    knowledge: []
  };

  $scope.addSkill = function(){
    $scope.character.activeSkills.push({
      skill: $scope.skill,
      rank: $scope.skillRank
    });
    $scope.skill='';
    $scope.skillRank='';
  };

  $scope.addKnowledge = function(){
    $scope.character.knowledge.push({
      skill: $scope.knowledge,
      rank: $scope.knowledgeRank
    });
    $scope.knowledge='';
    $scope.knowledgeRank='';
  };

  $scope.addItem = function(){
    $scope.character.items.push({
      item: $scope.item
    });
    $scope.item='';
  };

  $scope.addQuality = function(){
    $scope.character.qualities.push({
      skill: $scope.skill,
      rank: $scope.skillRank
    });
    $scope.skill='';
    $scope.skillRank='';
  };
});
