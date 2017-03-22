angular.module('app_litsco')
	.controller('controller_prods',['$scope', '$http', '$state', '$stateParams', 'factory_litsco', function($scope, $http, $state, $stateParams, factory_litsco){
		
		$('ul.tabs').tabs();
		$('.collapsible').collapsible();

		$scope.productIdObj = factory_litsco.get($stateParams.id);
		
		if(!$scope.productIdObj){
			$state.go('home');
		}

// FEATURES COLUMN CALCULATION
		$scope.columns = [];
		$scope.columnCount = 2;
		function calculateColumns() {
		    var itemsPerColumn = Math.ceil($scope.productIdObj.features.length / $scope.columnCount);
		    for (var i=0; i < $scope.productIdObj.features.length; i += itemsPerColumn) {
		      var col = {start:i, end: Math.min(i + itemsPerColumn, $scope.productIdObj.features.length) };
		       $scope.columns.push(col);
		    }
		}
		calculateColumns();

// COLORS ROW CALCULATION
		$scope.columns = [];
		$scope.columnCount = 2;
		function calculateColumns() {
		    var itemsPerColumn = Math.ceil($scope.productIdObj.features.length / $scope.columnCount);
		    for (var i=0; i < $scope.productIdObj.features.length; i += itemsPerColumn) {
		      var col = {start:i, end: Math.min(i + itemsPerColumn, $scope.productIdObj.features.length) };
		       $scope.columns.push(col);
		    }
		}
		calculateColumns();

		$scope.hoverColor = ' ';
		$scope.hoverColorText = function(color) {
			if (color) {
				var stringReplacer = /_/gi;
				$scope.hoverColor = color.replace(stringReplacer, ' ');
			} else {
				$scope.hoverColor = ' ';
			}
		}
		
}]);

angular.module('app_litsco')
	.filter('slice', function() {
	  return function(arr, start, end) {
	    return arr.slice(start, end);
	  };
	});

