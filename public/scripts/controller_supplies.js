angular.module('app_litsco')
	.controller('controller_supplies', ['$scope', '$state', '$stateParams', 'factory_litsco', function($scope, $state, $stateParams, factory_litsco) {

		var allData = factory_litsco;
        var cat = $stateParams.vendorType;
        var catInt = getCategoryInteger(cat);
        $scope.vendorList = [];

        function catId(catInt) {
            allData.filter(function(obj) {
                if (obj.cat === catInt) {
                    $scope.vendorList.push(obj);
                }
            });
        }
        catId(catInt);

        function getCategoryInteger(cat) {
			if (cat === 'roofing') {
				$scope.productHeader = 'Roofing Supplies';
				return 3;
			} else if (cat === 'waterproofing') {
				$scope.productHeader = 'Waterproofing Supplies';
				return 4;
			} else if (cat === 'commercial_metal') {
				$scope.productHeader = 'Commecial Metal Panels';
				return 5;
			}

        }

}]);
