angular.module('app_litsco')
    .controller('controller_prods', ['$scope', '$state', '$stateParams', 'factory_litsco', function ($scope, $state, $stateParams, factory_litsco) {

        var allData = factory_litsco;
        var id = $stateParams.id;
        $scope.current_tab = 1;

        function prodId(id) {
            allData.filter(function (obj) {
                if (obj.id === id) {
                    $scope.productIdObj = obj;
                }
            });
        }
        prodId(id);

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
        $scope.hoverColorText = function (color) {
            if (color) {
                $scope.hoverColor = color;
                updateSvgFill(this.hex);
            }
        };

        $scope.defaultFill = function (colors) {
            if (colors) {
                var defaultColor = colors[Object.keys(colors)[0]];
                $('.hover_color_change').attr('fill', defaultColor);
                return true;
            }
        };

        function updateSvgFill(hex) {
            var paths = $('.hover_color_change').attr('fill', hex);
        }

        $scope.currentTab = function (tab) {
            if (tab === 1) {
                $scope.current_tab = 1;
            } else if (tab === 2) {
                $scope.current_tab = 2;
            }
        };

        if ($scope.productIdObj.installVideo) {
            $scope.installVideoCode = function (code) {
                return $scope.code = code;
            };
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
        $scope.prevSlide = function() {
            if($scope.activeImg > 0) {
                $scope.activeImg--;
            }
        };

        $scope.modalImg = function() {
            $('.materialboxed').materialbox();
        };

    }]);

angular.module('app_litsco')
    .filter('slice', function () {
        return function (arr, start, end) {
            return arr.slice(start, end);
        };
    });
