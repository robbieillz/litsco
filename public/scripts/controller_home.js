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

		// NgMap.getMap().then(function(map) {
		// 	$scope.googleMapsUrl="https://maps.googleapis.com/maps/api/js?v=3&key=AIzaSyDJIjIX9488l2royVsdim2mbemLpsf5AvM";
	 //  	});

	  	// //other routes
	  	// var allData = factory_litsco;
	  	// var cat = 1;
	  	// $scope.streamlinePanelList = []

	  	// function catId(cat) {
	  	//     var prodIndex = allData.map(function(obj) {
	  	//         $scope.streamlinePanelList.push(obj);
	  	//     }).indexOf(cat);
	  	// }
	  	// catId(cat);
	  	
	  	// if(!$scope.streamlinePanelList){
	  	// 	$state.go('home');
	  	// }
}]);

