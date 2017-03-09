angular.module('app_litsco')
	.controller('controller_index',['$scope', '$route', 'NgMap',function($scope, $route, NgMap){

	$scope.$on('$routeChangeSuccess', function () {
		$('.carousel.carousel-slider').carousel({
			fullWidth: true,
			indicators: true
		});
		$('.carousel').carousel();
		setTimeout(function(){autoplay();}, 6000);

		function autoplay() {
		    $('.carousel.carousel-slider').carousel('next');
		    setTimeout(autoplay, 6000);
	    }

	    $('ul.tabs').tabs();
	NgMap.getMap().then(function(map) {
		$scope.googleMapsUrl="https://maps.googleapis.com/maps/api/js?v=3&key=AIzaSyDJIjIX9488l2royVsdim2mbemLpsf5AvM";
	  });
	});


}]);

