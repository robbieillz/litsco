angular.module("app_litsco").controller("controller_index", [
  "$scope",
  "factory_meta",
  "$timeout",
  function($scope, factory_meta, $timeout) {
    $("#modal1").modal();

    var opened = false;

    $scope.metaTag = factory_meta;

    $scope.showNews = false;

    $scope.openNews = function() {
      if (!$scope.showNews) {
        opened = true;
        $scope.showNews = true;
      }
    };

    $scope.closeNews = function() {
      $scope.showNews = false;
    };

    // $timeout(function() {
    //   if (opened) {
    //     return false;
    //   }
    //   $scope.openNews();
    // }, 2000);
  }
]);
