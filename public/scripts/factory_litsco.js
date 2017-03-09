angular.module('app_litsco')
	.factory('factory_litsco', ['$http', function($http){

		return {
	        get:  function(){
	            $http.get('data.json'); // this will return a promise to controller
        	}
        }
	}]);
