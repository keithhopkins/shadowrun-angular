angular.module('shadowrunApp')
.controller('CreateController', function($scope, characterFactory){
  $scope.character = {
    personalData: {
      alias: '',
      age: 0,
      metatype: 'Human',
      ethnicity: '',
      sex: '',
      height: '',
      weight: '',
      notoriety: '',
      streetCred: '',
      publicAwareness: ''
    },
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

  characterFactory.getCharacters()
  .then(function(response){
    $scope.characters = response;
    console.log('success', response);
  }, function(response){
    console.log('FAIL', reponse);
  });

  $scope.postCharacter = function(){
    characterFactory.postCharacter($scope.character)
      .then(function(response){
        // this callback will be called asynchronously
        // when the response is available
        console.log('SUCCESS', response);
      }, function(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.log('FAIL', response);
      });
  };

  $scope.getCharacter = function(){
    characterFactory.getCharacter($scope.getAlias)
      .then(function(response){
        console.log('SUCCESS', response);
      }, function(response){
        console.log('FAIL', response);
      })
  }
});
