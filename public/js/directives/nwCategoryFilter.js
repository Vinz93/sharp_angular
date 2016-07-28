app.directive('nwCategoryFilter',function () {
  return {
    replace: true,
    restric: "E",
    templateUrl: "views/directives/nwCategoryFilter.html",
    controller: function ($scope, Category) {
      $scope.categories = Category.query();
    }
  }
});
