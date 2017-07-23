angular.module('app_litsco')
	.controller('controller_home',['$scope', 'NgMap', function($scope, NgMap){
		
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

	    $('ul.tabs').tabs();

		NgMap.getMap().then(function(map) {
			$scope.googleMapsUrl="https://maps.googleapis.com/maps/api/js?v=3&key=AIzaSyDJIjIX9488l2royVsdim2mbemLpsf5AvM";
	  	});

}]);

