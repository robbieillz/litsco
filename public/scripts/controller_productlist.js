angular.module('app_litsco')
    .controller('controller_productlist', ['$scope', '$state', '$stateParams', 'factory_litsco', function($scope, $state, $stateParams, factory_litsco) {

        var allData = factory_litsco;
        var cat = $stateParams.cat;
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
			if (cat === 'streamline_metal_panels') {
				$scope.productHeader = 'Streamline Metal Panels';
				return 1;
			} else if (cat === 'metal_flashing') {
				$scope.productHeader = 'Metal Flashing';
				return 2;
			}

        }
    }]);
