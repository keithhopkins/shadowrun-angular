angular.module('shadowrunApp')
.controller('CreateController', function($scope, characterFactory, httpFactory){
  $scope.limits={attributes:{}};
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

  $scope.setMetatypePriority = function(priority){
    switch (priority){
      case 'A': $scope.limits.metatypes = [
               {metatype: 'Human', limit: 9},
               {metatype: 'Elf', limit: 8},
               {metatype: 'Dwarf', limit: 7},
               {metatype: 'Ork', limit: 7},
               {metatype: 'Troll', limit: 5}];
                 break;
      case 'B':  $scope.limits.metatypes = [
               {metatype: 'Human', limit: 7},
               {metatype: 'Elf', limit: 6},
               {metatype: 'Dwarf', limit: 4},
               {metatype: 'Ork', limit: 4},
               {metatype: 'Troll', limit: 0}];
                 break;
      case 'C': $scope.limits.metatypes = [
               {metatype: 'Human', limit: 5},
               {metatype: 'Elf', limit: 3},
               {metatype: 'Dwarf', limit: 1},
               {metatype: 'Ork', limit: 0}];
                break;
      case 'D': $scope.limits.metatypes = [
               {metatype: 'Human', limit:3},
               {metatype: 'Elf', limit: 0}];
                break;
      case 'E': $scope.limits.metatypes = [
               {metatype: 'Human', limit:0}];
                break;
    }
  };

  $scope.setAttributesPriority = function(priority){
    switch (priority){
      case 'A': $scope.limits.attributes.total = 24;
                break;
      case 'B': $scope.limits.attributes.total = 20;
                break;
      case 'C': $scope.limits.attributes.total = 16;
                break;
      case 'D': $scope.limits.attributes.total = 14;
                break;
      case 'E': $scope.limits.attributes.total = 12;
                break;
    }
  }

  $scope.setResourcePriority = function(priority){
    switch(priority){
      case 'A': $scope.limits.resource = 450000;
                break;
      case 'B': $scope.limits.resource = 275000;
                break;
      case 'C': $scope.limits.resource = 140000;
                break;
      case 'D': $scope.limits.resource = 50000;
                break;
      case 'E': $scope.limits.resource = 6000;
                break;
    }
  };

  $scope.setSkillsPriority = function(priority){
    switch(priority){
      case "A": $scope.limits.skills = {single: 46, group: 10};
                break;
      case "B": $scope.limits.skills = {single: 36, group: 5};
                break;
      case "C": $scope.limits.skills = {single: 28, group: 2};
                break;
      case "D": $scope.limits.skills = {single: 22, group: 0};
                break;
      case "E": $scope.limits.skills = {single: 10, group: 0};
                break;
    }
  };

  $scope.setMagicPriority = function(priority){
    switch(priority){
      case "A": if($scope.character.class === 'Technomancer'){
                  setMinMagicAndResonance(0,6);
                } else {
                  setMinMagicAndResonance(6,0);
                }
                break;
      case "B": if($scope.character.class === 'Adept'){
                  setMinMagicAndResonance(6,0);
                } else if($scope.character.class === 'Aspected Magician'){
                  setMinMagicAndResonance(5,0);
                } else if($scope.character.class === 'Technomancer'){
                  setMinMagicAndResonance(0,4);
                } else {
                  setMinMagicAndResonance(4,0);
                }
                break;
      case "C": if($scope.character.class === 'Adept'){
                  setMinMagicAndResonance(4,0);
                } else if($scope.character.class === 'Technomancer'){
                  setMinMagicAndResonance(0,3);
                } else {
                  setMinMagicAndResonance(3,0);
                }
                break;
      case "D": setMinMagicAndResonance(2,0);
                break;
      case "E": setMinMagicAndResonance(0,0);
                break;
    }
  }

  function setMinMagicAndResonance(magic, resonance){
    $scope.limits.attributes.min.magic = magic;
    $scope.limits.attributes.min.resonance = resonance;
  }

  $scope.setClass = function(charClass){
    $scope.character.class = charClass;
  };

  $scope.addSkill = function(){
    characterFactory.addSkill($scope.character.activeSkills,
                              $scope.skill,
                              $scope.skillRank,
                              $scope.skillGroup);
    $scope.skill = '';
    $scope.skillRank = '';
    $scope.skillGroup=false;
  };

  $scope.deleteSkill = function(index){
    $scope.character.activeSkills.splice(index,1);
  };

  $scope.addKnowledge = function(){
    characterFactory.addSkill($scope.character.knowledge,
                              $scope.knowledge,
                              $scope.knowledgeRank);
    $scope.knowledge = '';
    $scope.knowledgeRank = '';
  };

  $scope.deleteKnowledge = function(index){
    $scope.character.knowledge.splice(index, 1);
  };

  $scope.addItem = function(){
    console.log($scope.itemCost);
    characterFactory.addItem($scope.character.items,
                             $scope.item,
                             $scope.itemQuantity,
                             $scope.itemCost);
    $scope.item = '';
    $scope.itemQuantity = '';
    $scope.itemCost = '';
  };

  $scope.deleteItem = function(index){
    $scope.character.items.splice(index, 1);
  };

  $scope.addQuality = function(){
    characterFactory.addQuality($scope.character.qualities,
                                $scope.quality);
    $scope.quality = '';
  };

  $scope.deleteQuality = function(index){
    $scope.character.qualities.splice(index, 1);
  }

  // HTTP Requests
  httpFactory.getCharacters()
  .then(function(response){
    $scope.characters = response.data;
    console.log('success', $scope.characters);
  }, function(response){
    console.log('FAIL', reponse);
  });

  $scope.postCharacter = function(){
    httpFactory.postCharacter($scope.character)
      .then(function(response){
        // this callback will be called asynchronously
        // when the response is available
        // pushing an update push request doubles the character on the client side
        $scope.characters.push(response.data);
        $scope.httpMessage = 'Save Successful';
        $scope.httpSucess = 'http-success';
        console.log('SUCCESS', response);
      }, function(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        $scope.httpMessage = 'Save failed. Please try again.';
        $scope.httpSucess = 'http-fail';
        console.log('FAIL', response);
      });
  };

  // not currently used
  $scope.getCharacter = function(){
    httpFactory.getCharacter($scope.getAlias)
      .then(function(response){
        console.log('SUCCESS', response);
      }, function(response){
        console.log('FAIL', response);
      });
  };

  $scope.deleteCharacter = function(){
    httpFactory.deleteCharacter($scope.character._id)
      .then(function(response){
        // should delete the character from the characters array aswell
        $scope.httpMessage = 'Character successfully deleted';
        $scope.httpSucess = 'http-success';
        console.log('deleted', response);
      }, function(response){
        $scope.httpMessage = "Character wasn't deleted";
        $scope.httpMessage = 'http-fail';
        console.log('delete error', response);
      });
  };

  $scope.hideAllDisplay = function(){
    $scope.displayData = true;
    $scope.displayAttributes = true;
    $scope.displayItems = true;
    $scope.displayKnowledge = true;
    $scope.displaySkills = true;
    $scope.displayQualities = true;
  };

  $scope.hideAllForms = function(){
    $scope.showData = false;
    $scope.showSkills = false;
    $scope.showItems = false;
    $scope.showKnowledge = false;
    $scope.showQualities = false;
    $scope.showMetatype = false;
    $scope.showAttributes = false;
  }

  $scope.showValues = function(){
    console.log($scope.character);
    console.log($scope.limits);
  };
});
