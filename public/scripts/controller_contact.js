angular.module('app_litsco')
	.controller('controller_contact',['$scope', '$state','$http', function($scope, $state, $http){
		$scope.originTrue = false;
		$scope.litsco = '40.706940, -73.8613';

		$scope.showDirections = function(origin) {
			$('#directions-panel').addClass('directionsTrue');
			$scope.originTrue = true;
			$scope.originAddress = origin;
		};

		$scope.hideDirections = function() {
			$('#directions-panel').removeClass('directionsTrue');
			$scope.originTrue = false;
			$scope.originAddress = '';
		};
}]);
	