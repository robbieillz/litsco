angular.module('app_litsco')
    .controller('controller_prods', ['$scope', '$state', '$stateParams', 'factory_litsco', 'factory_meta', function ($scope, $state, $stateParams, factory_litsco, factory_meta) { 

        var allData = factory_litsco;
        var id = $stateParams.id;

        $scope.productIdObj = allData.find(function (obj) {
            if (obj.id === id) {
                return obj;
            }
        });
        
        factory_meta.product('LITSCO manufacturers ' + $scope.productIdObj.productName + ' in Queens, NY.  Download our data sheet for more information.', 'LITSCO, streamline metal panels, streamline metal flashing, metal cladding, custom metal flashing, custom metal panels, roof panels, wall panels');

        angular.element(document.querySelector('.jumbo-div')).css('backgroundImage', 'url("img/jumbo_' + $scope.productIdObj.jumboImg + '")').attr('alt', $scope.productIdObj.productName);       

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
        $scope.hoverColorText = function (selectedHover) {
            if (selectedHover.hex) {
                $scope.hoverColor = selectedHover.color;
                updateSvgFill(selectedHover.hex);
                // updateGradient(selectedHover.hex);
            }
        };

        $scope.defaultFill = function (colors) {
            if (colors) {
                var defaultColor = colors[Object.keys(colors)[0]];
                // createGradient($('svg')[0], 'MyGradient', [
                //     { offset: '10%', 'stop-color': createShade(defaultColor, 0.2) },
                //     { offset: '100%', 'stop-color': defaultColor }
                // ]);
                updateSvgFill(defaultColor);
                return true;
            }
        };

        function updateGradient(color) {
            $('linearGradient#MyGradient #stop-0').attr('stop-color', createShade(color, 0.2));
            $('linearGradient#MyGradient #stop-1').attr('stop-color', color);
        }


        function createGradient(svg, id, stops) {
            var svgNS = svg.namespaceURI;
            var grad = document.createElementNS(svgNS, 'linearGradient');
            grad.setAttribute('id', id);
            for (var i = 0; i < stops.length; i++) {
                var attrs = stops[i];
                var stop = document.createElementNS(svgNS, 'stop');
                stop.id = 'stop-' + i;
                for (var attr in attrs) {
                    if (attrs.hasOwnProperty(attr)) stop.setAttribute(attr, attrs[attr]);
                }
                grad.appendChild(stop);
            }

            var defs = svg.querySelector('defs') || svg.insertBefore(document.createElementNS(svgNS, 'defs'), svg.firstChild);
            return defs.appendChild(grad);
        }

        function createShade(color, percent) {
            var f = parseInt(color.slice(1), 16), t = percent < 0 ? 0 : 255, p = percent < 0 ? percent * -1 : percent, R = f >> 16, G = f >> 8 & 0x00FF, B = f & 0x0000FF;
            return "#" + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1);
        }

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
