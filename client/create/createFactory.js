angular.module('shadowrunApp')
.factory('characterFactory', function(){
  var factory = {};

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
});
