angular.module('app_litsco')
	.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider){

		$urlRouterProvider.otherwise('/');

			$stateProvider
			.state('home', {	
				url : '/',
				templateUrl : '/html/index.html',
				controller	: 'controller_index'
			})
			.state('product', {
				url : '/:id',
				templateUrl : '/html/template_product.html',
				controller	: 'controller_prods'
			})
		// $locationProvider.html5Mode(true)
	}])