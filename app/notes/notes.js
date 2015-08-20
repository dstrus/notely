'use strict';

var nevernoteBasePath = 'https://nevernote-1150.herokuapp.com/api/v1/',
    apiKey = '$2a$10$TTc8gLTzfWBk9SsDO7p.J.acOzMMG535814CudrCMQgmjUSvbQ2ju';

var noteApp = angular.module('notely.notes', ['ngRoute']);

noteApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/notes', {
    templateUrl: 'notes/notes.html'
  });
}]);

noteApp.controller('NotesController', ['$scope', 'NotesBackend', function($scope, NotesBackend) {
  var self = this;
  $scope.note = {};

  self.assignNotes = function(notes) {
    $scope.notes = notes;
  };

  $scope.commit = function() {
    NotesBackend.postNote($scope.note, self.assignNotes);
  };

  NotesBackend.fetchNotes(self.assignNotes);
}]);
