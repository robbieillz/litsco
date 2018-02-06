angular
  .module("app_litsco", ["ui.router", "ngMap", "ui.router.title"])
  .directive("myYoutube", function($sce) {
    return {
      restrict: "EA",
      scope: { code: "=" },
      replace: true,
      template:
        '<div style="height:400px;"><iframe style="overflow:hidden;height:100%;width:100%" width="100%" height="100%" src="{{ url }}" frameborder="0" allowfullscreen></iframe></div>',
      link: function(scope) {
        scope.$watch("code", function(newVal) {
          if (newVal) {
            scope.url = $sce.trustAsResourceUrl(
              "http://www.youtube.com/embed/" + newVal
            );
          }
        });
      }
    };
  })
  .directive("fileModel", [
    "$parse",
    function($parse) {
      return {
        restrict: "A",
        link: function(scope, element, attrs) {
          var model = $parse(attrs.fileModel);
          var modelSetter = model.assign;

          element.bind("change", function() {
            if (!element[0].files[0]) {
              return;
            } else if (scope.validateFileType(element[0].files[0])) {
              scope.$apply(function() {
                modelSetter(scope, element[0].files[0]);
              });
            } else {
              return false;
            }
          });
        }
      };
    }
  ])
  .run(function($rootScope, $state, $document, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $rootScope.$on("$stateChangeSuccess", function() {
      $document[0].body.scrollTop = $document[0].documentElement.scrollTop = 0;
    });
  })
  .config(function(NgMapProvider) {
    NgMapProvider.setDefaultOptions({
      marker: {
        optimized: false
      }
    });
  });
