angular.module('app_litsco')
	.controller('controller_home',['$scope', 'NgMap', function($scope, NgMap){
		$scope.originTrue = false;
		$scope.litsco = '40.706940, -73.8613';

		$('.carousel.carousel-slider').carousel({
			fullWidth: true,
			indicators: true
		});

		$('.carousel').carousel();
		setTimeout(function(){autoplay();});

		function autoplay() {
		    $('.carousel.carousel-slider').carousel('next');
		    setTimeout(autoplay, 6000);
	    }
		
		$scope.showDirections = function(origin) {
			$('#directions-panel').addClass('directionsTrue');
			$scope.originTrue = true;
			$scope.originAddress = origin;
		};

		$scope.hideDirections = function() {
			$('#directions-panel').removeClass('directionsTrue');
			$scope.originTrue = false;
			$scope.originAddress = '';
		};
}]);
