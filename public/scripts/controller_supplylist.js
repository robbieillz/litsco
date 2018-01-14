angular.module('app_litsco')
	.controller('controller_supplylist', ['$scope', '$state', '$stateParams', 'factory_litsco', 'factory_meta', function ($scope, $state, $stateParams, factory_litsco, factory_meta) {
		var allData = factory_litsco;
		var cat = getCategoryInteger($stateParams.type);
		var productListNameArray = [];		
		$scope.vendorList = allData.filter(function (obj) {
			if (obj.cat === cat) {
				productListNameArray.push(obj.productName);
				return obj;
			}
		});

		factory_meta.supplyList('LITSCO distributes: ' + productListNameArray.join(', '), productListNameArray.join(', '));

		function getCategoryInteger(type) {
			if (type === 'division_7_supplies') {
				$scope.productHeader = 'Division 7 Building Supplies';
				return 99;
			}
		}
	}]);
