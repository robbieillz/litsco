angular
  .module("app_litsco")
  .controller("controller_about", [
    "$scope",
    "$state",
    function($scope, $state) {
      angular
        .element(document.querySelector(".jumbo-div"))
        .css("backgroundImage", 'url("img/jumbo_about_full.png")');
    }
  ])
  .controller("controller_privacy", [
    "$scope",
    "$state",
    function($scope, $state) {}
  ])
  .controller("controller_copyright", [
    "$scope",
    "$state",
    function($scope, $state) {}
  ])
  .controller("controller_terms", [
    "$scope",
    "$state",
    function($scope, $state) {}
  ]);
