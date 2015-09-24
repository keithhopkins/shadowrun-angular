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

  $scope.deleteSkill = function(index){
    $scope.character.activeSkills.splice(index,1);
  }

  $scope.addKnowledge = function(){
    $scope.character.knowledge.push({
      skill: $scope.knowledge,
      rank: $scope.knowledgeRank
    });
    $scope.knowledge='';
    $scope.knowledgeRank='';
  };

  $scope.deleteKnowledge = function(index){
    $scope.character.knowledge.splice(index, 1);
  }

  $scope.addItem = function(){
    $scope.character.items.push({
      item: $scope.item,
      quantity: $scope.itemQuantity
    });
    $scope.item='';
    $scope.itemQuantity='';
  };

  $scope.deleteItem = function(index){
    $scope.character.items.splice(index, 1);
  }

  $scope.addQuality = function(){
    $scope.character.qualities.push({
      quality: $scope.quality
    });
    $scope.quality='';
  };

  $scope.deleteQuality = function(index){
    $scope.character.qualities.splice(index, 1);
  }

  characterFactory.getCharacters()
  .then(function(response){
    $scope.characters = response.data;
    console.log('success', $scope.characters);
  }, function(response){
    console.log('FAIL', reponse);
  });

  $scope.postCharacter = function(){
    characterFactory.postCharacter($scope.character)
      .then(function(response){
        // this callback will be called asynchronously
        // when the response is available
        // pushing an update push request doubles the character on the client side
        $scope.characters.push(response.data);
        console.log('SUCCESS', response);
      }, function(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.log('FAIL', response);
      });
  };

  // not currently used
  $scope.getCharacter = function(){
    characterFactory.getCharacter($scope.getAlias)
      .then(function(response){
        console.log('SUCCESS', response);
      }, function(response){
        console.log('FAIL', response);
      });
  };

  $scope.deleteCharacter = function(){
      characterFactory.deleteCharacter($scope.character._id)
        .then(function(response){
          // should delete the character from the characters array aswell

          console.log('deleted', response);
        }, function(response){
          console.log('delete error', response);
        });
  };

  $scope.showValues = function(){
    console.log($scope.character);
  };
});
