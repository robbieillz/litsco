angular.module('app_litsco')
	.controller('controller_supplies', ['$scope', '$state', '$stateParams', 'factory_litsco', function($scope, $state, $stateParams, factory_litsco) {
debugger
		var allData = factory_litsco;
        var cat = $stateParams.vendorType;
        var catInt = getCategoryInteger(cat);
        $scope.productList = [];

        function catId(catInt) {
            allData.filter(function(obj) {
                if (obj.cat === catInt) {
                    $scope.productList.push(obj);
                }
            });
        }
        catId(catInt);

        function getCategoryInteger(cat) {
			if (cat === 'roofing') {
				$scope.productHeader = 'Roofing Supplies';
				return 3;
			} else if (cat === 'waterproofing_supplies') {
				$scope.productHeader = 'Waterproofing Supplies';
				return 4;
			}

        }

}]);
