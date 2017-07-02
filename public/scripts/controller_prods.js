angular.module('app_litsco')
    .controller('controller_prods', ['$scope', '$state', '$stateParams', 'factory_litsco', function($scope, $state, $stateParams, factory_litsco) {

        var allData = factory_litsco;
        var id = $stateParams.id;

        $('ul.tabs').tabs();
        $('.collapsible').collapsible();

        function prodId(id) {
            var prodIndex = allData.map(function(obj) {
                return obj.id;
            }).indexOf(id);
            $scope.productIdObj = allData[prodIndex]
        }
        prodId(id);
        // factory_litsco.get($stateParams.id);

        if (!$scope.productIdObj) {
            $state.go('home');
        }

        // FEATURES COLUMN CALCULATION
        $scope.columns = [];
        $scope.columnCount = 2;

        function calculateColumns() {
            var itemsPerColumn = Math.ceil($scope.productIdObj.features.length / $scope.columnCount);
            for (var i = 0; i < $scope.productIdObj.features.length; i += itemsPerColumn) {
                var col = { start: i, end: Math.min(i + itemsPerColumn, $scope.productIdObj.features.length) };
                $scope.columns.push(col);
            }
        }
        calculateColumns();

        // COLORS ROW CALCULATION
        $scope.columns = [];
        $scope.columnCount = 2;

        function calculateRows() {
            var itemsPerColumn = Math.ceil($scope.productIdObj.features.length / $scope.columnCount);
            for (var i = 0; i < $scope.productIdObj.features.length; i += itemsPerColumn) {
                var col = { start: i, end: Math.min(i + itemsPerColumn, $scope.productIdObj.features.length) };
                $scope.columns.push(col);
            }
        }
        calculateRows();

        $scope.hoverColor = ' ';
        $scope.hoverColorText = function(color) {            
            if (color) {
                var stringReplacer = /_/gi;
                $scope.hoverColor = color.replace(stringReplacer, ' ');
                // updateSvgFill(this.hex);
            } else {
                $scope.hoverColor = ' ';
            }
        };

        function updateSvgFill(hex) {           
            var mainObject = document.getElementById('object-product-wrapper');

            var paths = $(mainObject).find('.hover_color_change');
        }
}]);

angular.module('app_litsco')
    .filter('slice', function() {
        return function(arr, start, end) {
            return arr.slice(start, end);
        };
    });