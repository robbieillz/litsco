angular.module('app_litsco')
    .controller('controller_productlist', ['$scope', '$state', '$stateParams', 'factory_litsco', 'factory_meta', function ($scope, $state, $stateParams, factory_litsco, factory_meta) {

        var allData = factory_litsco;
        var cat = $stateParams.cat;
        var catInt = getCategoryInteger(cat);
        var productListNameArray = [];
        $scope.productList = allData.filter(function (obj) {
            if (obj.cat === catInt) {
                productListNameArray.push(obj.productName);
                return obj;
            }
        });

        factory_meta.productList('LITSCO manufacturers these metal products: ' + productListNameArray.join(', '), 'LITSCO, streamline metal panels, streamline metal flashing, metal cladding, custom metal flashing, custom metal panels, roof panels, wall panels');
        
        function getCategoryInteger(cat) {
            if (cat === 'streamline_metal_panels') {
                $scope.productHeader = 'Streamline Metal Panels';
                $scope.productSubheader = 'The original manufacturer of Streamline metal products';
                $scope.productDescription = 'LITSCO has been manufacturing metal panels for over 40 years.  We take pride in understanding the local market and being available for projects nationwide.';
                return 1;
            } else if (cat === 'metal_flashing') {
                $scope.productHeader = 'Metal Flashing';
                $scope.productSubheader = 'High quality edge metal flashings for the building envelope';
                $scope.productDescription = 'LITSCO understands the importance of high quality manufacturing to ensure water stays on the exterior of your building.  That is why our core metal flashings can be used on any project or can be customized to fit a unique condition.';
                return 2;
            }

        }

        $scope.goToItemLink = function goToItemLink(product) {
            var cat_name;
            if (product.cat === 1) {
                cat_name = 'product_streamline';
            } else if (product.cat === 2) {
                cat_name = 'product_flashing';
            }

            return cat_name;
        };

        $scope.renderHTML = function(html) {
            return html;
        }
    }]);
