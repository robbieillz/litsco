angular.module('app_litsco')
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'html/home.html',
                controller: 'controller_home'
            })
            .state('product_streamline', {
                url: '/streamline_metal_panels/:id',
                templateUrl: 'html/template_product.html',
                controller: 'controller_prods'
            })
            .state('product_flashing', {
                url: '/metal_flashing/:id',
                templateUrl: 'html/template_product.html',
                controller: 'controller_prods'
            })
            .state('streamline_panels', {
                url: '/:cat',
                templateUrl: 'html/template_productlist.html',
                controller: 'controller_productlist'
            })
            .state('metal_flashing', {
                url: '/:cat',
                templateUrl: 'html/template_productlist.html',
                controller: 'controller_productlist'
            })
            .state('contact', {
                url: '/contact/',
                templateUrl: 'html/contact.html',
                controller: 'controller_contact'
            })
            .state('supply_item', {
                url: '/division_7_supplies/:vendorType/',
                templateUrl: 'html/template_supplies.html',
                controller: 'controller_supplies'
            })
            .state('supplies', {
                url: '/division_7_supplies/',
                params : {
                    type: 'division_7_supplies'
                },
                templateUrl: 'html/template_supplylist.html',
                controller: 'controller_supplylist'
            })
            .state('about', {
                url: '/about/',
                templateUrl: 'html/about.html',
                controller: 'controller_about'
            })
            .state('careers', {
                url: '/careers/',
                templateUrl: 'html/careers.html',
                controller: 'controller_careers'
            });

        $locationProvider.html5Mode(true);
    }]);
