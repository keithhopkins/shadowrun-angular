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

  // Attribute $watches
  // Agility $watch
  $scope.$watch(function(scope){
    return scope.character.attributes.agility;
  }, function(){
    $scope.character.personalData.walkSpeed = $scope.character.attributes.agility*2;
    $scope.character.personalData.runSpeed = $scope.character.attributes.agility*4;
  });
  // Reaction $watch
  $scope.$watch(function(scope){
    return scope.character.attributes.reaction;
  }, function(){
    $scope.character.attributes.initiative = Number($scope.character.attributes.reaction
                                           + $scope.character.attributes.intuition)
                                           + ' + 1d6';
  });

  // Intuition $watch
  $scope.$watch(function(scope){
    return scope.character.attributes.intuition;
  }, function(){
    $scope.character.attributes.initiative = Number($scope.character.attributes.reaction
                                           + $scope.character.attributes.intuition)
                                           + ' + 1d6';
    $scope.character.attributes.astralInitiative = Number($scope.character.attributes.intuition*2)
                                                 + ' + 2d6';
    $scope.character.personalData.judgeIntentions = $scope.character.attributes.charisma
                                                  + $scope.character.attributes.intuition;
  });

  // Charisma $watch
  $scope.$watch(function(scope){
    return scope.character.attributes.charisma;
  }, function(){
    $scope.character.personalData.composure = $scope.character.attributes.charisma
                                            + $scope.character.attributes.will;
    $scope.character.personalData.judgeIntentions = $scope.character.attributes.charisma
                                                  + $scope.character.attributes.intuition;
  });

  // Logic $watch
  $scope.$watch(function(scope){
    return scope.character.attributes.logic;
  }, function(){
    $scope.character.personalData.memory = $scope.character.attributes.logic
                                         + $scope.character.attributes.will;
  });

  // Willpower $watch
  $scope.$watch(function(scope){
    return scope.character.attributes.will;
  }, function(){
    $scope.character.personalData.composure = $scope.character.attributes.charisma
                                            + $scope.character.attributes.will;
    $scope.character.personalData.memory = $scope.character.attributes.logic
                                         + $scope.character.attributes.will;
  });

  // Calculated personalData $watches
  $scope.$watch(function(scope){
    return scope.character.personalData.streetCred;
  }, function(){
    $scope.character.personalData.notoriety = $scope.character.personalData.streetCred
                                            + $scope.character.personalData.publicAwareness;
  });

  $scope.$watch(function (scope){
    return scope.character.personalData.publicAwareness;
  }, function(){
    $scope.character.personalData.notoriety = $scope.character.personalData.streetCred
                                            + $scope.character.personalData.publicAwareness;
  });

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




// $scope.priorityTable = {
//   columnDefs:[{field:'priority'},{field:'metatype'},{field:'attributes'}],
//   data:[
//     {
//       priority: 'A',
//       metatype: 'Human (9)\nElf (8)\nDwarf (7)\nOrk (7)\nTroll (5)',
//       attributes: '24',
//       magicOrResonance: 'Magician or Mystic Adept: Magic 6, two Rating 5 Magic skills, 10 spells\nTechnomancer: Resonance 6, two Rating 5 Resonance Skills, 5 complex forms',
//       skills: '46/10',
//       resource: '450,000'
//     },
//     {
//       priority: 'B',
//       metatype: 'Human (7)\nElf (6)\nDwarf (4)\nOrk (4)\nTroll (0)',
//       attributes: '20',
//       magicOrResonance: 'Magician or Mystic Adept: Magic 4, two Rating 4 Magic skills, 7 spells\nTechnomancer: Resonance 4, two Rating 4 Resonance Skills, 2 complex forms\nAdept: Magic 6, one Rating 4 Active Skill\nAspected Magician: Magic 5, one Rating 4 Magical Skill group',
//       skills: '36/5',
//       resource: '275,000'
//     },
//     {
//       priority: 'C',
//       metatype: 'Human (5)\nElf (3)\nDwarf (1)\nOrk (0)',
//       attributes: '16',
//       magicOrResonance: 'Magician or Mystic Adept: Magic 3, 5 spells\nTechnomancer: Resonance 3, 1 complex forms\nAdept: Magic 4, one Rating 2 Active Skill\nAspected Magician: Magic 3, one Rating 2 Magical Skill group',
//       skills: '28/2',
//       resource: '140,000'
//     },
//     {
//       priority: 'D',
//       metatype: 'Human (3)\nElf (0)',
//       attributes: '14',
//       magicOrResonance: 'Adept: Magic 2 Aspected Magician: Magic 2',
//       skills: '22/0',
//       resource: '50,000'
//     },
//     {
//       priority: 'E',
//       metatype: 'Human (1)',
//       attributes: '12',
//       magicOrResonance: 'Mundane',
//       skills: '10/0',
//       resource: '6,000'
//     }
//   ]
// }
