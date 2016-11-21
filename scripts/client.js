var sigmanautApp = angular.module('SigmanautApp', []);

sigmanautApp.controller('SigmanautController', function(){
  console.log('Sigmanaut controller loaded');

  var self = this; // holds the value of this

  self.people = [
    {
      "firstName": "Luke",
      "lastName": "Schlangen",
      "git_username": "LukeSchlangen",
      "shoutout": "Thanks for being awesome during the angular lecture today."
    },
    {
      "firstName": "Kris",
      "lastName": "Szafranski",
      "git_username": "kdszafranski",
      "shoutout": "Thanks for being awesome during the angular lecture tomorrow."
    },
    {
      "firstName": "Huck",
      "lastName": "Brock",
      "git_username": "huckbee",
      "shoutout": "Thanks for being awesome during a random lecture."
    }
  ];

  self.newPerson = {};

  self.createPerson = function(){
    console.log(self.newPerson);
    self.people.push(angular.copy(self.newPerson));
    console.log(self.people);
  };

});
