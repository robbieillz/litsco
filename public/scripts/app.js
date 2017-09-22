angular.module('app_litsco', [
  'ui.router',
  'ngMap'
])
  .directive('myYoutube', function ($sce) {
    return {
      restrict: 'EA',
      scope: { code: '=' },
      replace: true,
      template: '<div style="height:400px;"><iframe style="overflow:hidden;height:100%;width:100%" width="100%" height="100%" src="{{ url }}" frameborder="0" allowfullscreen></iframe></div>',
      link: function (scope) {
        scope.$watch('code', function (newVal) {
          if (newVal) {
            scope.url = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + newVal);
          }
        });
      }
    };
  })
  .directive('imageonload', function () {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        element.bind('load', function () {
          scope.$apply(attrs.imageonload);
        });
      }
    };
  })
  .config(function (NgMapProvider) {
    NgMapProvider.setDefaultOptions({
      marker: {
        optimized: false
      }
    });
  });
  