angular.module('app_litsco')
	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
			$routeProvider
			.when('/', {
				templateUrl : '/html/index.html',
				controller	: 'controller_index'
			})
			.when('/classic_cr', {
				templateUrl : '/html/template_product.html',
				controller	: 'controller_prods'
			})

		    $locationProvider.hashPrefix('!')


	}])