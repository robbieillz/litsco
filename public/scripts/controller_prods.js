angular.module('app_litsco')
	.controller('controller_prods',['$scope', '$http', '$route', function($scope, $http, $route){

		$http.get('data.json').
		then(function(response, status, headers, config) {
		      $scope.allData = response.data;
		      console.log($scope.allData[0].productDetails[0].jumboImg)
		    })

}]);

