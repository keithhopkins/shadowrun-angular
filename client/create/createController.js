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
    race: 'Human',
    attributes: {
      body: 1,
      strength: 1,
      agility: 1,
      reaction: 1,
      intuition: 1,
      charisma: 1,
      wisdom: 1,
      logic: 1,
      will: 1,
      magic: 0,
      resonance: 0,
      edge: 1
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
      item: $scope.item,
      quantity: $scope.itemQuantity
    });
    $scope.item='';
    $scope.itemQuantity='';
  };

  $scope.addQuality = function(){
    $scope.character.qualities.push({
      quality: $scope.quality
    });
    $scope.quality='';
  };

  $scope.showValues = function(){
    console.log($scope.character);
  };

});
