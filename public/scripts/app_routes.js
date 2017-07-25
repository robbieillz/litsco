angular.module('app_litsco')
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'html/home.html',
                controller: 'controller_home'
            })
            .state('product', {
                url: '/streamline_panels/:id',
                templateUrl: 'html/template_product.html',
                controller: 'controller_prods'
            })
            .state('streamline_panels', {
                url: '/:cat',
                templateUrl: 'html/streamlinepanels.html',
                controller: 'controller_panels'
            })

        $locationProvider.html5Mode(true);
    }])
