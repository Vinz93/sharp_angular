app.controller('NotesShowCtrl',function (Note, $routeParams, $scope, $location) {
  $scope.note = Note.get({id: $routeParams.id});

  $scope.delteNote = function (note) {
    note.$remove().then(function () {
      $location.path('/notes');
    });
  }
});
