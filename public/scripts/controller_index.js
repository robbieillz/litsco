angular.module('app_litsco')
	.controller('controller_index',['$scope', '$route', function($scope, $route){

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

	    function initMap() {
	    	var uluru = {lat: -25.363, lng: 131.044};
	    	var map = new google.maps.Map(document.getElementById('map'), {
	    		zoom: 4,
	    		center: uluru
	    	});
	    	var marker = new google.maps.Marker({
	    		position: uluru,
	    		map: map
	    	});
	    }
	});

}]);

