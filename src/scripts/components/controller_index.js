angular.module("app_litsco").controller("controller_index", [
  "$scope",
  "factory_meta",
  "$timeout",
  function($scope, factory_meta, $timeout) {
    $scope.metaTag = factory_meta;

    $scope.showNews = false;

    $scope.openNews = function() {
      if (!$scope.showNews) {
        $scope.showNews = true;
      }
    };

    $scope.closeNews = function() {
      $scope.showNews = false;
    };

    $timeout(function() {
      $scope.openNews();
    }, 2000);
  }
]);
