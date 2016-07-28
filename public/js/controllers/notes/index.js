app.controller('NotesIndexCtrl', function (Note, $scope) {
  $scope.notes = Note.query();
  console.log($scope.notes);
  $scope.seacrh = {};
});
