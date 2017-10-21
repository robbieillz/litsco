angular.module('app_litsco')
	.controller('controller_index',['$scope', 'factory_meta', function($scope, factory_meta){
		$scope.metaTag = factory_meta;		
}]);
