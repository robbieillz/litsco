angular.module('app_litsco')
	.config(['$routeProvider', function($routeProvider){
			$routeProvider
			.when('/', {
				templateUrl : '/html/index.html',
				controller	: 'controller_shell'
			})
			// .when('/open', {
			// 	templateUrl : '/html/open.html',
			// 	controller	: 'controlOpen'
			// })
	}])