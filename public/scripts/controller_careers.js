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
        };

        $scope.$on("fileSelected", function (event, args) {
            $scope.$apply(function () {            
                //add the file object to the scope's files collection
                $scope.files.push(args.file);
            });
        });

        $scope.postCareers = function (careerData) {
            $scope.careerData.position = $scope.positionName;
            // $scope.careerData.file = $scope.file;

            // var contactFormHeight = $('.contact-form-wrapper').height();
			// $scope.formSubmit = true;
			// $('.contact-form-success').height(contactFormHeight);
			// Check form validation
			// if ($scope.contactForm.$invalid === true) {
			// 	return;
			// }
			// wrap all your input values in $scope.postData
			$scope.postData = angular.copy(careerData);

			var req = {
				method: 'POST',
				url: '/api/career_submit',
                headers: {
                    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
                },
                // transformRequest: function (data, headersGetter) {
                //     var formData = new FormData();
                //     angular.forEach(data, function (value, key) {
                //         formData.append(key, value);
                //     });
    
                //     var headers = headersGetter();
                //     delete headers['Content-Type'];
    
                //     return formData;
                // },
                data: {
                    model: $scope.postData,
                    file: $scope.file
                },
                // transformRequest: function (data, headersGetter) {
                //     var formData = new FormData();
                //     angular.forEach(data, function (value, key) {
                //         formData.append(key, value);
                //     });
    
                //     var headers = headersGetter();
                //     delete headers['Content-Type'];
    
                //     return formData;
                // }
    
			};

			$http(req)
				.then(function successCallback(response) {
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
				}, function errorCallback(response) {
					//do something after error
					// called asynchronously if an error occurs
					// or server returns response with an error status.
				});
		};
    }]);