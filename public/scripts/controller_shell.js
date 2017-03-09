angular.module('app_litsco')
	.controller('controller_shell',['$scope', '$http', '$route', 'factory_litsco', function($scope, $http, $route, factory_litsco){

		$http.get('data.json').
		then(function(response, status, headers, config) {
		      $scope.allData = response.data;
		    })


}]);