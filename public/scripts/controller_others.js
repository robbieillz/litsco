angular.module('app_litsco')
	.controller('controller_about', ['$rootScope', '$scope', '$state', function ($rootScope, $scope, $state) {

		$rootScope.title = 'About Us, Our History, Our Services';

	}])
	.controller('controller_careers', ['$rootScope', '$scope', '$state', function ($rootScope, $scope, $state) {

		$rootScope.title = 'Careers and Employment Opportunities';

	}]);
