angular.module('shadowrunApp')
.factory('characterFactory', ['$http', function($http){
  var factory = {};
  factory.getCharacter = function(alias){
    // should return the character that we want to modify
    // needs to be updated
    return $http.get('/create/'+alias);
  };

  factory.getCharacters = function(){
    return $http.get('/create/all');
  };

  factory.postCharacter = function(character){
    // Simple POST request example (passing data) :
    return $http.post('/create', character);
  };
  return factory;
}]);
