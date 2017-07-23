angular.module('app_litsco')
	.controller('controller_panels', ['$scope', '$state', '$stateParams', 'factory_litsco', function($scope, $state, $stateParams, factory_litsco) {
 
 	  	var allData = factory_litsco;
	  	var cat = $stateParams.cat;
	  	var catInt = cat === 'streamline_metal_panels' ? 1 : 2;
	  	$scope.streamlinePanelList = [];

	  	function catId(catInt) {
	  	    var prodIndex = allData.map(function(obj) {
	  	        $scope.streamlinePanelList.push(obj);
	  	    }).indexOf(catInt);
	  	}
	  	catId(catInt);
	  	// if($scope.streamlinePanelList.length === 0){
	  	// 	$state.go('home');
	  	// }
}]);

