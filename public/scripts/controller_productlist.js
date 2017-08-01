angular.module('app_litsco')
	.controller('controller_panels', ['$scope', '$state', '$stateParams', 'factory_litsco', function($scope, $state, $stateParams, factory_litsco) {

 	  	var allData = factory_litsco;
	  	var cat = $stateParams.cat;
	  	var catInt = cat === 'streamline_metal_panels' ? 1 : 2;
	  	$scope.productList = [];
	  	$scope.productHeader = cat === 'streamline_metal_panels' ? 'Streamline Metal Panels' : 'Metal Flashing';

	  	function catId(catInt) {
	  	    var prodIndex = allData.map(function(obj) {
	  	        $scope.productList.push(obj);
	  	    }).indexOf(catInt);
	  	}
	  	catId(catInt);
}]);
