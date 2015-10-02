angular.module('shadowrunApp')
.factory('characterFactory', ['$http', function($http){
  var factory = {};

  // not currently used
  factory.getCharacter = function(alias){
    return $http.get('/create/'+alias);
  };

  factory.getCharacters = function(){
    return $http.get('/create/all');
  };

  factory.postCharacter = function(character){
    return $http.post('/create', character);
  };

  factory.deleteCharacter = function(id){
    return $http.delete('/create/delete/'+id);
  };

  factory.addSkill = function(skills, skill, rank, group){
    if(group){
      skills.push({
        skill: skill,
        rank: rank,
        group: group
      });
    } else {
      skills.push({
        skill: skill,
        rank: rank
      });
    }
  };

  factory.addItem = function(items, item, quantity, cost){
    items.push({
      item: item,
      quantity: quantity,
      cost: cost
    });
  };

  factory.addQuality = function(qualities, quality){
    qualities.push({
      quality: quality
    });
  }
  return factory;
}]);
