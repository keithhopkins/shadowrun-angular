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
  return factory;
}]);
