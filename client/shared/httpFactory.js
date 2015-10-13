angular.module('shadowrunApp')
.factory('httpFactory', ['$http', function($http){
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

  factory.getUserCharacters = function(){
    return $http.get('/user/characters');
  };

  factory.saveUserCharacter = function(character){
    return $http.post('/user/character', character);
  };

  factory.updateUserCharacter = function(character){
    return $http.put('/user/character', character);
  };

  return factory;
}]);
