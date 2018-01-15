angular.module('app_litsco')
	.controller('controller_supplies', ['$scope', '$state', '$stateParams', 'factory_litsco', 'factory_meta', function ($scope, $state, $stateParams, factory_litsco, factory_meta) {

		var allData = factory_litsco;
		var cat = $stateParams.vendorType;
		var catInt = getCategoryInteger(cat);
		var productListNameArray = [];
		$scope.vendorList = allData.filter(function (obj) {
			if (obj.cat === catInt) {
				productListNameArray.push(obj.vendorName);
				return obj;
			}
		});

		factory_meta.supply('LITSCO supplies ' + productListNameArray.join(', ') + ', with options for boom truck deliveries to your site.', 'LITSCO, ' + productListNameArray.join(', ') + ', Roofing Supplies, Waterproofing Supplies, Commecial Metal Panels, Building Envelope, Division 7 Specialties, Division 7 Building Products');

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
			} else if (cat === 'envelope') {
				$scope.productHeader = 'Building Envelope';
				return 6;
			} else if (cat === 'division_7_specialties') {
				$scope.productHeader = 'Division 7 Specialties';
				return 7;
			} else if (cat === 'flatsheets') {
				$scope.productHeader = 'Flatsheet Metal';
				return 8;
			} else if (cat === 99) {
				$scope.productHeader = 'Division 7 Building Products';
			}
		}

		$scope.goToItemLink = function goToItemLink(product) {
			var cat_name;
			if (product.cat !== 1 || product.cat !== 2) {
				cat_name = 'supplies';
			}

			return cat_name;
		};

	}]);
