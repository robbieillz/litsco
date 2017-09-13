angular.module('app_litsco')
	.controller('controller_contact', ['$scope', '$state', '$http', function ($scope, $state, $http) {
		$scope.originTrue = false;
		$scope.litsco = '40.706940, -73.8613';
		$scope.contactData = {
			phone: '',
			email: '',
			name: '',
			company: '',
			message: ''
		};
		$scope.postData = {};

		$scope.showDirections = function (origin) {
			$('#directions-panel').addClass('directionsTrue');
			$scope.originTrue = true;
			$scope.originAddress = origin;
		};

		$scope.hideDirections = function () {
			$('#directions-panel').removeClass('directionsTrue');
			$scope.originTrue = false;
			$scope.originAddress = '';
		};

		$scope.postMail = function (contact) {
			// Check form validation
			// if ($scope.contactForm.$invalid === true) {
			// 	return;
			// }
			// wrap all your input values in $scope.postData
			$scope.postData = angular.copy(contact);

			var req = {
				method: 'POST',
				url: '/contact',
				headers: {
					'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
				},
				data: $scope.postData
			};

			$http(req)
				.then(function successCallback(response) {
					console.log('success');
					//do something after success
					// this callback will be called asynchronously
					// when the response is available
				}, function errorCallback(response) {
					console.log('error');
					//do something after error
					// called asynchronously if an error occurs
					// or server returns response with an error status.
				});
		};
	}]);
