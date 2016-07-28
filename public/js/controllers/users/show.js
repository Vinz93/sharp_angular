app.controller('UsersShowCtrl',function (User, $routeParams, $scope) {
  $scope.user = User.get({id: $routeParams.id});
});
