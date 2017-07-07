angular.module('app_litsco')
	.controller('controller_panels', ['$scope', '$state', 'factory_litsco', function($scope, $state, factory_litsco) {

		$scope.greeting = 'HI';
 
	  	// //other routes
	  	// var allData = factory_litsco;
	  	// var cat = 1;
	  	// $scope.streamlinePanelList = []

	  	// function catId(cat) {
	  	//     var prodIndex = allData.map(function(obj) {
	  	//         $scope.streamlinePanelList.push(obj);
	  	//     }).indexOf(cat);
	  	// }
	  	// catId(cat);
	  	// console.log($scope.streamlinePanelList)
	  	
	  	// if($scope.streamlinePanelList.length === 0){
	  	// 	$state.go('home');
	  	// }
}]);

