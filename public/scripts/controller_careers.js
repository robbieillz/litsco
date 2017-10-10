angular.module('app_litsco')
    .controller('controller_careers', ['$scope', '$state', '$http', function ($scope, $state, $http) {
        $('.collapsible').collapsible();

        $scope.selectedPosition = false;
        $scope.positionName = '';
        $scope.careerData = {
            first: '',
            last: '',
			email: '',
            phone: '',
			address: '',
			position: '',
            message: ''
        };
        $scope.files = [];
        
		$scope.postData = {};

        $scope.applicationClick = function(name, event) {
            $scope.selectedPosition = true;
            $scope.positionName = name;
            angular.element(document.querySelector('#position-label')).addClass('active');
            setTimeout(function(){scrollIntoView();},200);
        };

        function scrollIntoView() {
            document.querySelector('#careers-application-form').scrollIntoView({ behavior: 'smooth' });
        }

        $scope.postCareers = function (careerData) {
            $scope.careerData.position = $scope.positionName;

            // var contactFormHeight = $('.contact-form-wrapper').height();
			// $scope.formSubmit = true;
			// $('.contact-form-success').height(contactFormHeight);
			// Check form validation
			// if ($scope.contactForm.$invalid === true) {
			// 	return false;
			// }
			// wrap all your input values in $scope.postData
			$scope.postData = angular.copy(careerData);

			var formData = new FormData();
            Object.keys($scope.postData).forEach(function(key) {
                formData.append(key, $scope.careerData[key]);
            });

            var req = {
				method: 'POST',
                url: '/api/career_submit',
                transformRequest: angular.identity,
				headers: 
					{'Content-Type': undefined},
				data: formData
			};

			$http(req)
				.then(function(data, status) {
					$scope.careerData = {
                        first: '',
                        last: '',
                        email: '',
                        phone: '',
                        address: '',
                        position: '',
                        message: ''
					};
					$scope.contactForm.$setPristine();
					$('.form-career-input-field, .form-career-submit').prop('disabled', true);

					$scope.formSubmitSuccess = true;
					//do something after success
					// this callback will be called asynchronously
					// when the response is available
				}, function(data, status) {
					//do something after error
					// called asynchronously if an error occurs
					// or server returns response with an error status.
				});
		};
    }]);
    