app.controller('NotesCreateCtrl',function (Category, Note, User, $scope, $location) {
  $scope.categories = Category.query();
  $scope.users = User.query();
  $scope.note = new Note();
  $scope.isSubmiting = false;

  $scope.saveNote = function (note) {
    $scope.isSubmiting = true;
    note.$save().then(function () {
      $location.path('/notes');
    })
    .catch(function () {
      // valiadations
    })
    .finally(function () {
      $scope.isSubmiting = false;
    });
  }
});
