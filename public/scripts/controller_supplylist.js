angular.module('app_litsco')
	.controller('controller_supplylist', ['$scope', '$state', '$stateParams', 'factory_litsco', function ($scope, $state, $stateParams, factory_litsco) {
		var allData = factory_litsco;
		var cat = getCategoryInteger($stateParams.type);
		$scope.vendorList = allData.filter(function (obj) {
			if (obj.cat === cat) {
				return obj;
			}
		});

		function getCategoryInteger(type) {
			if (type === 'division_7_supplies') {
				$scope.productHeader = 'Division 7 Building Supplies';
				return 99;
			}
		}
	}]);
