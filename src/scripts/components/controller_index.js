angular.module("app_litsco").controller("controller_index", [
  "$scope",
  "$sce",
  "factory_meta",
  "$timeout",
  "gMapAPIkey",
  function ($scope, $sce, factory_meta, $timeout, gMapAPIkey) {
    // debugger;
    // $scope.gMapAPIkey = gMapAPIkey;

    // $scope.trustSrc = function(src) {
    //   return $sce.trustAsResourceUrl(src);
    // }

    $("#modal1").modal();

    $scope.opened = false;

    $scope.metaTag = factory_meta;

    $scope.showNews = false;

    $scope.openNews = function () {
      if (!$scope.showNews) {
        $scope.opened = true;
        $scope.showNews = true;
      }
    };

    $scope.closeNews = function () {
      $scope.showNews = false;
    };
  },
]);
