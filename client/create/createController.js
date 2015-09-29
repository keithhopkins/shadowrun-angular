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
      streetCred: 0,
      publicAwareness: 0
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
      edge: 1,
      min: {
        body: '1',
        strength: '1',
        agility: '1',
        reaction: '1',
        intuition: '1',
        charisma: '1',
        wisdom: '1',
        logic: '1',
        will: '1',
        magic: '0',
        resonance: '0',
        edge: '1'
      },
      max: {
        body: '6',
        strength: '6',
        agility: '6',
        reaction: '6',
        intuition: '6',
        charisma: '6',
        wisdom: '6',
        logic: '6',
        will: '6',
        magic: '6',
        resonance: '6',
        edge: '6'
      }
    },
    activeSkills: [],
    qualities: [],
    items: [],
    knowledge: []
  };

  $scope.addSkill = function(){
    characterFactory.addSkill($scope.character.activeSkills,
                              $scope.skill,
                              $scope.skillRank);
  };

  $scope.deleteSkill = function(index){
    $scope.character.activeSkills.splice(index,1);
  }

  $scope.addKnowledge = function(){
    characterFactory.addSkill($scope.character.knowledge,
                              $scope.knowledge,
                              $scope.knowledgeRank);
  };

  $scope.deleteKnowledge = function(index){
    $scope.character.knowledge.splice(index, 1);
  }

  $scope.addItem = function(){
    characterFactory.addItem($scope.character.items,
                             $scope.item,
                             $scope.itemQuantity);
  };

  $scope.deleteItem = function(index){
    $scope.character.items.splice(index, 1);
  };

  $scope.addQuality = function(){
    characterFactory.addQuality($scope.character.qualities,
                                $scope.quality);
  };

  $scope.deleteQuality = function(index){
    $scope.character.qualities.splice(index, 1);
  }

  // HTTP Requests
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
