angular.module('app_litsco')
    .controller('controller_prods', ['$rootScope', '$scope', '$state', '$stateParams', 'factory_litsco', function ($rootScope, $scope, $state, $stateParams, factory_litsco) {

        var allData = factory_litsco;
        var id = $stateParams.id;

        $scope.productIdObj = allData.find(function (obj) {
            if (obj.id === id) {
                return obj;
            }
        });

        $rootScope.title = $scope.productIdObj.productName;

        // FEATURES COLUMN CALCULATION
        $scope.columns = [];
        $scope.columnCount = 2;

        $scope.calculateColumns = function () {
            var itemsPerColumn = Math.ceil($scope.productIdObj.features.length / $scope.columnCount);
            for (var i = 0; i < $scope.productIdObj.features.length; i += itemsPerColumn) {
                var col = { start: i, end: Math.min(i + itemsPerColumn, $scope.productIdObj.features.length) };
                $scope.columns.push(col);
            }
        };

        $scope.hoverColor = ' ';
        $scope.hoverColorText = function (color) {
            if (color) {
                $scope.hoverColor = color;
                updateSvgFill(this.hex);
            }
        };

        $scope.defaultFill = function (colors) {
            if (colors) {
                var defaultColor = colors[Object.keys(colors)[0]];
                updateSvgFill(defaultColor);
                return true;
            }
        };

        function updateSvgFill(hex) {
            $('.hover_color_change').attr('fill', hex);
        }

        if ($scope.productIdObj.portfolio) {
            $scope.photoList = $scope.productIdObj.portfolio;
        }
        $scope.activeImg = 0;
        $scope.nextSlide = function () {
            if ($scope.activeImg !== $scope.photoList.length - 1) {
                $scope.activeImg++;
            }
        };
        $scope.prevSlide = function () {
            if ($scope.activeImg > 0) {
                $scope.activeImg--;
            }
        };

        $scope.modalImg = function () {
            $('.materialboxed').materialbox();
        };

    }]);

angular.module('app_litsco')
    .filter('slice', function () {
        return function (arr, start, end) {
            return arr.slice(start, end);
        };
    });
