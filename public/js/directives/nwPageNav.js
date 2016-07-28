app.directive('nwPageNav',function () {
  return {
    replace: true,
    restric: "E",
    templateUrl: "views/directives/nwPageNav.html",
    controller: function ($scope, $location) {
      $scope.isPage = function (name) {
        return new RegExp("/" + name + "($| /)").test($location.path());
      };
    }
  }
});
