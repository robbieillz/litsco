angular.module('app_litsco')
	.controller('controller_supplylist', ['$rootScope', '$scope', '$state', '$stateParams', 'factory_litsco', function ($rootScope, $scope, $state, $stateParams, factory_litsco) {
		var allData = factory_litsco;
		var cat = getCategoryInteger($stateParams.type);
		$scope.vendorList = allData.filter(function (obj) {
			if (obj.cat === cat) {
				return obj;
			}
		});

		$rootScope.title = 'Distributor of roofing, wateproofing, and sheet metal supplies';

		function getCategoryInteger(type) {
			if (type === 'division_7_supplies') {
				$scope.productHeader = 'Division 7 Building Supplies';
				return 99;
			}
		}
	}]);
