angular.module('shadowrunApp')
.factory('characterFactory', ['$http', function($http){
  var characters = [];
  var factory = {};
  factory.getCharacter = function(){
    // should return the character that we want to modify
    // needs to be updated
    return characters;
  };

  factory.postCharacter = function(character){
    return $http.post('/create/character', character);
  };
  return factory;
}]);
