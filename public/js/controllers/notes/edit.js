app.controller('NotesEditCtrl',function (User, Category, Note, $routeParams, $scope, $location) {
  $scope.note = Note.get({id: $routeParams.id});
  $scope.categories = Category.query();
  $scope.users = User.query();
  $scope.isSubmiting = false;
  $scope.saveNote = function (note) {
    $scope.isSubmiting = true;
    console.log(note);
    note.$update().finally(function () {
      $scope.isSubmiting = false;
      $location.path("/notes/" + note._id);
    });
  }
});


// other way
// console.log('note id:', note.id, ' note : ',note);
// Note.update({id: note.id}, note,function (res) {
//   console.log(res);
// });
