'use strict';
app.controller('UsersIndexCtrl', function (User, $scope) {
  $scope.users = User.query();
});
